package com.cognizant.stocklearn.repository;

import com.cognizant.stocklearn.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface StockRepository extends JpaRepository<Stock, Integer> {

    // 1. Facebook stocks in September 2019
    List<Stock> findByCodeAndDateBetween(
            String code,
            LocalDate startDate,
            LocalDate endDate);

    // 2. Google stocks with closing price > given value
    List<Stock> findByCodeAndCloseGreaterThan(
            String code,
            double close);

    // 3. Top 3 highest transaction volume
    List<Stock> findTop3ByOrderByVolumeDesc();

    // 4. Lowest 3 Netflix stock prices
    List<Stock> findTop3ByCodeOrderByCloseAsc(String code);
}