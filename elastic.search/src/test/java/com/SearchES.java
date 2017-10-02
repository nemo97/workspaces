package com;


import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.entity.ContentType;
import org.apache.http.nio.entity.NStringEntity;
import org.apache.http.util.EntityUtils;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.Response;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.transport.TransportAddress;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.junit.Test;

import java.net.InetAddress;
import java.util.HashMap;

import static org.elasticsearch.index.query.QueryBuilders.matchQuery;

public class SearchES {


    @Test
    public void test1() throws  Exception {

        RestClient restClient = RestClient.builder(
                new HttpHost("192.168.1.148", 9200, "http")
//                new HttpHost("localhost", 9201, "http"))
                )
                .build();

        HttpEntity entity = new NStringEntity(
                "{ \"query\": { \"match_all\": {}}}",
                ContentType.APPLICATION_JSON);

        // alternative: performRequestAsync

        Response response = restClient.performRequest("POST",
                "/_search", new HashMap<>(), entity);

        String json = EntityUtils.toString(response.getEntity());

        System.out.println("...json.."+json);

        restClient.close();
    }



}