package com.example.demo.restcontroller;

import com.example.demo.entities.CardEntity;
import com.example.demo.restservice.ICardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CardController {
    private final com.example.demo.restservice.ICardService ICardService;

    public CardController(ICardService ICardService) {
        this.ICardService = ICardService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/Cards")
    public List<CardEntity> getAllCards() {
        return ICardService.getAllCards();
    }

}
