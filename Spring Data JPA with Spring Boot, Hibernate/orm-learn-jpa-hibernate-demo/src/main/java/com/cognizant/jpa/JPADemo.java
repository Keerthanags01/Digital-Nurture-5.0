package com.cognizant.jpa;

import com.cognizant.model.Country;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JPADemo {

    @PersistenceContext
    private EntityManager entityManager;

    public void run() {

        List<Country> countries = entityManager
                .createQuery("FROM Country", Country.class)
                .getResultList();

        System.out.println("\n===== JPA Demo =====");

        for (Country country : countries) {
            System.out.println(country);
        }
    }
}