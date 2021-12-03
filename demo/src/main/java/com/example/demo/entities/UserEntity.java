package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="game_user")
public class UserEntity { // kullanıcılar sadece isim yazarak giriş yapacak lobide puanlarına göre sıralanacak

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private boolean isStoryteller;
    private boolean isHost;
    private int point;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isStoryteller() {
        return isStoryteller;
    }

    public void setStoryteller(boolean storyteller) {
        isStoryteller = storyteller;
    }

    public boolean isHost() {
        return isHost;
    }

    public void setHost(boolean host) {
        isHost = host;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }
}
