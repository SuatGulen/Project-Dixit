package com.example.demo.websocket.model;

import com.example.demo.websocket.entities.CardEntity;


public class Lobby {

    private CardEntity stCard;
    private String stClue;

    private User storyTeller;


    public Lobby() {
    }

    public CardEntity getStCard() {
        return stCard;
    }

    public void setStCard(CardEntity stCard) {
        this.stCard = stCard;
    }

    public String getStClue() {
        return stClue;
    }

    public void setStClue(String stClue) {
        this.stClue = stClue;
    }

    public User getStoryTeller() {
        return storyTeller;
    }

    public void setStoryTeller(User storyTeller) {
        this.storyTeller = storyTeller;
    }
}