package com.example.demo.websocket.model;

public class User {
    private Long id;
    private String username;
    private String sessionId;
    private boolean storyteller;
    private boolean isHost;
    private int point;
    private int gainedPoint;

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

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public boolean isStoryteller() {
        return storyteller;
    }

    public void setStoryteller(boolean storyteller) {
        this.storyteller = storyteller;
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

    public int getGainedPoint() {
        return gainedPoint;
    }

    public void setGainedPoint(int gainedPoint) {
        this.gainedPoint = gainedPoint;
    }
}
