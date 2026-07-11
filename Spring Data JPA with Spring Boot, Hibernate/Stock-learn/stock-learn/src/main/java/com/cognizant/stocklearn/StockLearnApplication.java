package com.cognizant.stocklearn;

import com.cognizant.stocklearn.model.Stock;
import com.cognizant.stocklearn.service.StockService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class StockLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(StockLearnApplication.class);

    private static StockService stockService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(StockLearnApplication.class, args);

        stockService = context.getBean(StockService.class);

        testFacebookStocks();

        testGoogleStocks();

        testTop3Volume();

        testLowestNetflixStocks();
    }

    private static void testFacebookStocks() {

        LOGGER.info("========== Facebook Stocks - September 2019 ==========");

        List<Stock> stocks = stockService.getFacebookStocks();

        stocks.forEach(System.out::println);
    }

    private static void testGoogleStocks() {

        LOGGER.info("========== Google Stocks Close > 1250 ==========");

        List<Stock> stocks = stockService.getGoogleStocks();

        stocks.forEach(System.out::println);
    }

    private static void testTop3Volume() {

        LOGGER.info("========== Top 3 Highest Volume ==========");

        List<Stock> stocks = stockService.getTop3Volume();

        stocks.forEach(System.out::println);
    }

    private static void testLowestNetflixStocks() {

        LOGGER.info("========== Lowest 3 Netflix Stocks ==========");

        List<Stock> stocks = stockService.getLowestNetflixStocks();

        stocks.forEach(System.out::println);
    }
}