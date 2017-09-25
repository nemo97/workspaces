package com;


import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.transport.TransportAddress;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.junit.Test;

import java.net.InetAddress;

import static org.elasticsearch.index.query.QueryBuilders.boolQuery;
import static org.elasticsearch.index.query.QueryBuilders.matchQuery;
import static org.elasticsearch.index.query.QueryBuilders.termQuery;
import static org.junit.Assert.assertEquals;

public class ElasticSearchIndex{


    @Test
    public void test1() throws  Exception {


        TransportAddress address =
                new InetSocketTransportAddress(
                        InetAddress.getByName("192.168.1.148"), 9300);

        Client client = new PreBuiltTransportClient(Settings.EMPTY)
                            .addTransportAddress(address);


        SearchResponse searchResponse = client
                .prepareSearch("comicbook")
                .setQuery(
                    matchQuery("_all", "spider"))
                .execute().actionGet();


        SearchHit hit = searchResponse.getHits().getAt(0);
        String food = hit.getSource().get("food").toString();

        System.out.println("....resuts .."+food);

         client.close();
    }



}