import {Component, Input, OnInit,} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Card} from "../Card";
import {IngameService} from "../ingame.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  cards: Card[]=[];
  showButton: boolean = false;
  selectedCard?: Card
  @Input() playerClue: String=""

  constructor(public dialog: MatDialog, private router: Router,private ingameService: IngameService){
  }

  ngOnInit(): void {
    this.getCards();
  }

  cardClicked(index: number): void {
    console.log("clicked")
    this.selectedCard = this.cards[index];
    console.log(this.selectedCard.imageURL)
  }
  getCards(): void {
    this.ingameService.getCards()
      .subscribe(cards => {
        console.log("Cards= ", cards);
        this.cards = cards;
      });
  }
}
