package com.example.demo.restservice;

import com.example.demo.entities.CardEntity;

import java.util.List;

public interface ICardService {

    List<CardEntity> getAllCards();
}
