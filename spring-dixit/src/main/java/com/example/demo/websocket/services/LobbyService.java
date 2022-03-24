package com.example.demo.websocket.services;

import com.example.demo.websocket.entities.CardEntity;
import com.example.demo.websocket.model.Lobby;
import com.example.demo.websocket.model.User;
import com.example.demo.websocket.repo.CardRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@Service
public class LobbyService implements ILobbyService {

    final CardRepository repository;

    Lobby lobby = new Lobby();

    List<User> users = new ArrayList<>();

    List<CardEntity> cardEntities;
    List<CardEntity> cards = new ArrayList<>();

    List<CardEntity> selectedCards = new ArrayList<>();

    private int controlledPlayers = 0;
    private int stPoint = 0;

    int idx;

    public LobbyService(CardRepository repository) {
        this.repository = repository;
        cardEntities = repository.findAll();
        cards.addAll(cardEntities);
        Collections.shuffle(cards);
    }

    @Override
    public void addUser(String username, String sessionId) {
        User user = new User();
        user.setUsername(username);
        user.setSessionId(sessionId);
        if (users.isEmpty()) {
            user.setHost(true);
            user.setStoryteller(true);
        }
        users.add(user);
    }

    @Override
    public List<User> getAllUsers() {
        return users;
    }


    @Override
    public List<CardEntity> getAllCards() {
        List<CardEntity> tempCards = new ArrayList<>();
        System.out.println(this.cards.size());
        if(this.cards.size()<6){
            this.cards.addAll(cardEntities);
            Collections.shuffle(this.cards);
        }
        for (int i = 0; i < 6; i++) {
            int j = 0;
            tempCards.add(this.cards.get(j));
            this.cards.remove(0);
        }
        return tempCards;
    }

    public void setStCard(CardEntity card) {
        lobby.setStCard(card);
        selectedCards.add(card);
    }

    @Override
    public List<CardEntity> addSelectedCard(String ownerId, CardEntity card) {
        card.setOwnerId(ownerId);

        selectedCards.add(card);
        if (selectedCards.size() == users.size()) {
            Collections.shuffle(selectedCards);
            return getSelectedCards();
        } else
            return null;
    }

    @Override
    public String isStoryTeller(String username) {
        for (User user : this.users) {
            if (user.isStoryteller() && user.getUsername().equals(username)) {
                return "true";
            }
        }
        return "false";
    }

    @Override
    public String isHost(String username) {
        for (User user : this.users) {
            if (user.isHost() && user.getUsername().equals(username)) {
                return "true";
            }
        }
        return "false";
    }

    @Override
    public String setClue(String clue) {
        this.lobby.setStClue(clue.trim());
        return this.lobby.getStClue();
    }

    @Override
    public List<CardEntity> getSelectedCards() {
        return this.selectedCards;
    }

    @Override
    public CardEntity chosenCardControl(CardEntity card, String sessionId) {
        for (User user : users) {
            if (user.getSessionId().equals(sessionId)) {

                if (card.getimageURL().equals(lobby.getStCard().getimageURL())) {
                    user.setGainedPoint(user.getGainedPoint() + 3);
                    user.setPoint(user.getPoint() + 3);
                    stPoint++;
                }
                else {
                    for (CardEntity card2 : selectedCards) {
                        if (card2.getimageURL().equals(card.getimageURL())) {
                            card.setOwnerId(card2.getOwnerId());
                        }
                    }
                        for (User user2 : users) {
                            if (user2.getSessionId().equals(card.getOwnerId())) {
                                if (!user2.getSessionId().equals(sessionId)) {
                                    user2.setGainedPoint(user2.getGainedPoint() + 1);
                                    user2.setPoint(user2.getPoint() + 1);
                                }
                                break;
                            }
                        }
                    }
                }
            }

        controlledPlayers++;

        if (controlledPlayers == users.size() - 1) {
            if (stPoint > 0 && stPoint < users.size() - 1) {
                for (User user : users) {
                    if (user.isStoryteller()) {
                        user.setGainedPoint(user.getGainedPoint() + 3);
                        user.setPoint(user.getPoint() + 3);
                    }
                }
            }
            else if (stPoint == 0) {
                for (User user2 : users) {
                    if (!user2.isStoryteller()) {
                        user2.setGainedPoint(user2.getGainedPoint() + 2);
                        user2.setPoint(user2.getPoint() + 2);
                    }
                }
            }

            return lobby.getStCard();
        }
        else
            return null;
    }

    @Override
    public String nextRound() {
        this.selectedCards.clear();
        lobby.setStCard(null);
        lobby.setStClue(null);

        this.controlledPlayers = 0;
        this.stPoint = 0;
        idx=0;

        for(User resetPoint : users){
            resetPoint.setGainedPoint(0);
        }

        for (User user : users) {
            if (user.isStoryteller()) {
                user.setStoryteller(false);
                idx = users.indexOf(user);

                if (idx != users.size()-1) {
                    users.get(idx + 1).setStoryteller(true);
                }
                else {
                    users.get(0).setStoryteller(true);
                }
                return "true";
            }
        }
        return "true";
    }


}