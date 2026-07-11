package com.cognizant;

import com.cognizant.hibernate.HibernateDemo;
import com.cognizant.jpa.JPADemo;
import com.cognizant.model.Country;
import com.cognizant.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnJpaHibernateDemoApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnJpaHibernateDemoApplication.class);

    private static CountryService countryService;
    private static HibernateDemo hibernateDemo;
    private static JPADemo jpaDemo;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnJpaHibernateDemoApplication.class, args);

        countryService = context.getBean(CountryService.class);
        hibernateDemo = context.getBean(HibernateDemo.class);
        jpaDemo = context.getBean(JPADemo.class);

        LOGGER.info("Inside main");

        testHibernate();

        testJPA();

        testSpringDataJPA();
    }

    private static void testHibernate() {

        LOGGER.info("Hibernate Demo Started");

        hibernateDemo.run();

        LOGGER.info("Hibernate Demo Finished");
    }

    private static void testJPA() {

        LOGGER.info("JPA Demo Started");

        jpaDemo.run();

        LOGGER.info("JPA Demo Finished");
    }

    private static void testSpringDataJPA() {

        LOGGER.info("Spring Data JPA Demo Started");

        List<Country> countries = countryService.getAllCountries();

        System.out.println("\n===== Spring Data JPA Demo =====");

        countries.forEach(System.out::println);

        LOGGER.info("Spring Data JPA Demo Finished");
    }
}