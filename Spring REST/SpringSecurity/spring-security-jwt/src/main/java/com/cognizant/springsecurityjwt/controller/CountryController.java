package com.cognizant.springsecurityjwt.controller;

import com.cognizant.springsecurityjwt.model.Country;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @GetMapping("/countries")
    public Country getCountry() {

        return new Country("IN", "India");

    }
}