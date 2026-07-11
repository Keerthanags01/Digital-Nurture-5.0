package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    // Search by containing text
    public List<Country> searchCountry(String text) {
        return countryRepository.findByNameContaining(text);
    }

    // Search by containing text and sort
    public List<Country> searchCountrySorted(String text) {
        return countryRepository.findByNameContainingOrderByNameAsc(text);
    }

    // Search by starting letter
    public List<Country> searchCountryStartingWith(String alphabet) {
        return countryRepository.findByNameStartingWith(alphabet);
    }
}