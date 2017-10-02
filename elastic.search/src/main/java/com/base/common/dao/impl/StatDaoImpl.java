package com.base.common.dao.impl;


import com.base.common.dao.StatDao;
import com.base.common.dto.StatDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by ssing on 4/21/2017.
 */
@Repository
public class StatDaoImpl  implements StatDao {

    private  static Logger logger = LoggerFactory.getLogger(StatDaoImpl.class);

    @Qualifier("statJdbcTemplate")
    @Autowired
    NamedParameterJdbcTemplate statJdbcTemplate;

    /// -1 : default , 0 - properly , 1 - problem in creating db skip all together
    AtomicInteger initializeProperly = new AtomicInteger(-1);

    @Override
    public StatDto create(StatDto statDto) {
        Assert.notNull(statDto);
        if(isHeathFine()){
            String insertSql = "insert into job_stat(job_name,job_exec_id,step_name,start_time,end_time,number_record) " +
                    "values ( :jobName,:jobExecId,:stepName,:startTime,:endTime,:numberRecord )" ;

            statJdbcTemplate.update(insertSql, new BeanPropertySqlParameterSource(statDto));
        }else{
            logger.info("Skipping keep stat");
        }

        return statDto;
    }

    @Override
    public boolean cleanUp(int days) {
        LocalDate beforeDaysDate = LocalDate.now().minusDays(days);
        if(isHeathFine()){
            String deleteSql = "delete from job_stat where start_time < :startTime ";
            Map<String,Object> param = new HashMap<>();
            param.put("startTime",beforeDaysDate);

            int updatedCount = statJdbcTemplate.update(deleteSql, param);
            if(updatedCount > 0){
                logger.info("job_stat DELETED count "+updatedCount);
            }

        }else{
            logger.info("Skipping keep stat");
        }
        return false;

    }

    @Override
    public List<StatDto> search(StatDto creteria) {
        return statJdbcTemplate.query("select * from job_stat", new RowMapper<StatDto>() {
            @Override
            public StatDto mapRow(ResultSet rs, int rowNum) throws SQLException {
                StatDto statDto = new StatDto();
                statDto.setJobName(rs.getString("job_name"));
                statDto.setStepName(rs.getString("step_name"));
                statDto.setStartTime(new Date(rs.getTimestamp("start_time").getTime()));
                statDto.setEndTime(new Date(rs.getTimestamp("end_time").getTime()));
                statDto.setNumberRecord(rs.getLong("number_record"));
                statDto.setJobExecId(rs.getString("job_exec_id"));

                return statDto;
            }
        });
    }

    private boolean isHeathFine(){
        initDB();
        return initializeProperly.get() == 0;
    }

    public void initDB(){
        if(initializeProperly.get() < 0){
            synchronized (this){
                if(initializeProperly.get() < 0 ){
                    createTablesIfnotThere();
                }

            }
        }
    }

    private void createTablesIfnotThere() {
        boolean isExist = false;
        try {
            List<Map<String,Object>> dummyList =  statJdbcTemplate.queryForList("select * from job_stat",new HashMap<String,Object>());
            isExist = true;
        }catch (Exception e){
            isExist = false;
        }

        if(!isExist){
            try{
                String createSql = "create table job_stat(job_name string,job_exec_id string,step_name string,start_time datetime,end_time datetime,number_record integer)";
                statJdbcTemplate.update(createSql,new HashMap<String,Object>());
                initializeProperly.set(0);
            }catch (Exception e){
                // problem in db creation
                initializeProperly.set(-1);
            }

        }else{
            // database already there so table is created
            initializeProperly.set(0);
        }
    }
}
