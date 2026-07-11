package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        countryService = context.getBean(CountryService.class);

        testSearchContaining();

        testSearchContainingSorted();

        testSearchStartingWith();
    }

    private static void testSearchContaining() {

        LOGGER.info("Search by containing 'ou'");

        List<Country> countries = countryService.searchCountry("ou");

        countries.forEach(System.out::println);
    }

    private static void testSearchContainingSorted() {

        LOGGER.info("Search by containing 'ou' sorted");

        List<Country> countries =
                countryService.searchCountrySorted("ou");

        countries.forEach(System.out::println);
    }

    private static void testSearchStartingWith() {

        LOGGER.info("Countries starting with Z");

        List<Country> countries =
                countryService.searchCountryStartingWith("Z");

        countries.forEach(System.out::println);
    }
}