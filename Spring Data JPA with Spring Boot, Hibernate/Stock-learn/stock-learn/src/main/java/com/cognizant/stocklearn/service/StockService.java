package com.cognizant.stocklearn.service;

import com.cognizant.stocklearn.model.Stock;
import com.cognizant.stocklearn.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    // 1. Facebook stocks in September 2019
    public List<Stock> getFacebookStocks() {
        return stockRepository.findByCodeAndDateBetween(
                "FB",
                LocalDate.of(2019, 9, 1),
                LocalDate.of(2019, 9, 30));
    }

    // 2. Google stocks where close > 1250
    public List<Stock> getGoogleStocks() {
        return stockRepository.findByCodeAndCloseGreaterThan(
                "GOOGL",
                1250);
    }

    // 3. Top 3 highest volume
    public List<Stock> getTop3Volume() {
        return stockRepository.findTop3ByOrderByVolumeDesc();
    }

    // 4. Lowest 3 Netflix stock prices
    public List<Stock> getLowestNetflixStocks() {
        return stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX");
    }
}