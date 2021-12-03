package com.example.demo.restservice;

import com.example.demo.entities.CardEntity;
import com.example.demo.repo.CardRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class CardService implements ICardService {

    final CardRepository repository;

    List<CardEntity> cards = new ArrayList<>();
    List<CardEntity> rawCards = new ArrayList<>();



    public CardService(CardRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<CardEntity> getAllCards() {

        rawCards = repository.findAll();
        if(rawCards.size()<6){
            // TODO: thrrow expection
            return Collections.emptyList();
        }
        Collections.shuffle(rawCards);

        for(int i=0; i<6; i++){
            cards.add(rawCards.get(i));
        }
        return cards;
    }
}