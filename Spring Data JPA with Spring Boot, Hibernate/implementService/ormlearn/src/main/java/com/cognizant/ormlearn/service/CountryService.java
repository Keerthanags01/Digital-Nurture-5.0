package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    // Get all countries
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    // Find by ID (Hands-on 5)
    public Country getCountry(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    // Add Country
    public void addCountry(Country country) {
        countryRepository.save(country);
    }

    // Update Country
    public void updateCountry(Country country) {
        countryRepository.save(country);
    }

    // Delete Country
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }

    // Search Country
    public List<Country> searchCountry(String name) {
        return countryRepository.findByNameContainingIgnoreCase(name);
    }

    // Hands-on 6
    @Transactional
    public Country findCountryByCode(String countryCode)
            throws CountryNotFoundException {

        Optional<Country> result = countryRepository.findById(countryCode);

        if (!result.isPresent()) {
            throw new CountryNotFoundException("Country not found");
        }

        return result.get();
    }
}