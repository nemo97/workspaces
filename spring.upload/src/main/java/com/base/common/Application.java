package com.base.common;

import com.base.common.storage.StorageProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import javax.sql.DataSource;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class Application {
	private  static Logger logger = LoggerFactory.getLogger(Application.class);

	public static void main(String[] args) {
		SpringApplication.run(Application.class);
	}

	@Bean
	@ConfigurationProperties(prefix="onbasecommon.stat.datasource")
	public DataSource statDatasource() {
		return DataSourceBuilder.create().build();
	}

	@Bean
	public NamedParameterJdbcTemplate statJdbcTemplate() {
		return new NamedParameterJdbcTemplate(statDatasource());
	}
}

