package com.example.demo.websocket.repo;
import com.example.demo.websocket.entities.CardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends JpaRepository<CardEntity, Long> { }