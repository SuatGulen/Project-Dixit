package com.example.demo.websocket.entities;

import javax.persistence.*;

@Entity
@Table(name="game_card")
public class CardEntity {

    @Id
    @GeneratedValue
    private Long id;
    private String imageURL;
    private String ownerId;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    @Column(name="imageURL")
    public String getimageURL() {
        return imageURL;
    }

    public void setimageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(String ownerId) {
        this.ownerId = ownerId;
    }
}
