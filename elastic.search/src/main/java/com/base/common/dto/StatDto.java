package com.base.common.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

/**
 * Created by ssing on 4/21/2017.
 */
public class StatDto {
    private String jobName;
    private String jobExecId;
    private String stepName;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:SS")
    private Date startTime;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:SS")
    private Date endTime;
    private Long numberRecord;

    @Override
    public String toString() {
        return "StatDto{" +
                "jobName='" + jobName + '\'' +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", numberRecord=" + numberRecord +
                '}';
    }

    public String getStepName() {
        return stepName;
    }

    public void setStepName(String stepName) {
        this.stepName = stepName;
    }

    public String getJobExecId() {
        return jobExecId;
    }

    public void setJobExecId(String jobExecId) {
        this.jobExecId = jobExecId;
    }
    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Long getNumberRecord() {
        return numberRecord;
    }

    public void setNumberRecord(Long numberRecord) {
        this.numberRecord = numberRecord;
    }
}
