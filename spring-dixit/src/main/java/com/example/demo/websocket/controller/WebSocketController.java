package com.example.demo.websocket.controller;

import com.example.demo.websocket.entities.CardEntity;
import com.example.demo.websocket.model.User;
import com.example.demo.websocket.services.ILobbyService;
import org.springframework.messaging.handler.annotation.*;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Controller
@CrossOrigin
public class WebSocketController {

    private final com.example.demo.websocket.services.ILobbyService ILobbyService;

    public WebSocketController(ILobbyService ILobbyService) {
        this.ILobbyService = ILobbyService;
    }

    @MessageMapping("/adduser")
    @SendToUser("/queue/username")
    public String userEnter(@Header("simpSessionId") String sessionId,String username) {
        ILobbyService.addUser(username,sessionId);
        return username;
    }

    @MessageMapping("/updateusers")
    @SendTo("/topic/users")
    public List<User> allUsers() {
        return ILobbyService.getAllUsers();
    }

    @MessageMapping("/cards")
    @SendToUser("/queue/cards")
    public List<CardEntity> dealCards() {
        return ILobbyService.getAllCards();
    }

    @MessageMapping("/storyteller")
    @SendToUser("/queue/storyteller")
    public String isStoryTeller (String username){
        return ILobbyService.isStoryTeller(username);
    }

    @MessageMapping("/host")
    @SendToUser("/queue/host")
    public String isHost (String username){
        return ILobbyService.isHost(username);
    }

    @MessageMapping("/start")
    @SendTo("/topic/start")
    public String startGame (){
        return "true";
    }

    @MessageMapping("/stselectedcard")
    public void getStCard(CardEntity card){
        ILobbyService.setStCard(card);
    }

    @MessageMapping("/clue")
    @SendTo("/topic/clue")
    public String getClue(String clue){
        return ILobbyService.setClue(clue);
    }

    @MessageMapping("/playerselectedcard")
    @SendTo("/topic/selectedcards")
        public List<CardEntity> addPlayerCard(@Header("simpSessionId") String ownerId,CardEntity card){
            return ILobbyService.addSelectedCard(ownerId,card);
        }

    @MessageMapping("/playerchosencard")
    @SendTo("/topic/allchosen")
            public CardEntity addPlayerChosenCard(@Header("simpSessionId") String sessionId, CardEntity card){
               return ILobbyService.chosenCardControl(card , sessionId);
    }
    @MessageMapping("/nextround")
    @SendTo("/topic/nextround")
    public String nextRound(){
        return ILobbyService.nextRound();
    }

}