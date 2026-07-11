package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {

    // Search by containing text
    List<Country> findByNameContaining(String text);

    // Search by containing text and sort by name
    List<Country> findByNameContainingOrderByNameAsc(String text);

    // Search by starting letter
    List<Country> findByNameStartingWith(String alphabet);
}