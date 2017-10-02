package com.base.common.dao;



import com.base.common.dto.StatDto;

import java.util.List;

/**
 * Created by ssing on 4/21/2017.
 */
public interface StatDao {
    StatDto create(StatDto statDto);
    boolean cleanUp(int days);
    List<StatDto> search(StatDto creteria);
}
