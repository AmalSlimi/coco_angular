package com.example.testblanc.Repository;

import com.example.testblanc.entities.Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankRepository extends JpaRepository<Bank,Long> {
    Bank findByAgence (String bank);
}
