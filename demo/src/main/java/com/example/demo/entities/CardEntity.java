package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="game_card")
public class CardEntity {   //kart destesi databasede tutulacak kullanıcılara gösterilecek kullanılan kartlar silinecek.

    @Id
    @GeneratedValue
    private Long id;
    private String imageURL;

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
}
