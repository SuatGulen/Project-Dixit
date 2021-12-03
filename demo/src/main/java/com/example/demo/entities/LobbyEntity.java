package com.example.demo.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="game_lobby")
public class LobbyEntity { //kullanıcılar önce lobiye toplanacak belli bir sayıya ulaştığında host oyunu başlatabilecek
    // kullanıcıların seçtikleri kart tutulacak ve karşılaştırılacak
    //  puan dağılımı yapılacak

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int id;
    private String lobbyCode;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "lid_user")
    private List<UserEntity> usersInGame;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "lid_card")
    private List<CardEntity> cardsInGame;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLobbyCode() {
        return lobbyCode;
    }

    public void setLobbyCode(String lobbyCode) {
        this.lobbyCode = lobbyCode;
    }

    public List<UserEntity> getUsersInGame() {
        return usersInGame;
    }

    public void setUsersInGame(List<UserEntity> usersInGame) {
        this.usersInGame = usersInGame;
    }

    public List<CardEntity> getCardsInGame() {
        return cardsInGame;
    }

    public void setCardsInGame(List<CardEntity> cardsInGame) {
        this.cardsInGame = cardsInGame;
    }
}