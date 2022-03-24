package com.example.demo.websocket.services;


import com.example.demo.websocket.entities.CardEntity;
import com.example.demo.websocket.model.User;

import java.util.List;

public interface ILobbyService {

    void addUser(String username, String sessionId);

    List<User> getAllUsers();

    List<CardEntity> getAllCards();

    List<CardEntity> addSelectedCard(String ownerId, CardEntity card);

    void setStCard(CardEntity card);

    String isStoryTeller(String username);

    String isHost(String username);

    String setClue(String clue);

    List<CardEntity> getSelectedCards();

    CardEntity chosenCardControl(CardEntity card, String sessionId);

    String nextRound();

}