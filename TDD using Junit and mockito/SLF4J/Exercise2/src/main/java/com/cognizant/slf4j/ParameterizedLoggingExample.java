package com.cognizant.slf4j;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {

        String name = "Keerthana";
        int marks = 95;

        logger.info("Student Name: {}", name);
        logger.info("Student Marks: {}", marks);

        logger.info("Student {} scored {} marks.", name, marks);
    }
}