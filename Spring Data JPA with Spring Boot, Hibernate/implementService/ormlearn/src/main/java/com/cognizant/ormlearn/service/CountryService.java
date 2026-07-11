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

    //Get all countries
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    //Find by code
    public Country getCountry(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    //Add
    public void addCountry(Country country) {
        countryRepository.save(country);
    }

    //Update
    public void updateCountry(Country country) {
        countryRepository.save(country);
    }

    //Delete
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }

    //Search
    public List<Country> searchCountry(String name) {
        return countryRepository.findByNameContainingIgnoreCase(name);
    }

}