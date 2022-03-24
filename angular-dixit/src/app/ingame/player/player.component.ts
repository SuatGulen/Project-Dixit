import {Component, Input, OnInit, TemplateRef, ViewChild,} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Card} from "../../Card";
import {IngameService} from "../../ingame.service";
import {MessageService} from "../../message.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  showTick: Boolean=false;

  cards: Card[]=[];
  showButton: boolean = true;
  selectedCard?: Card;
  chosenCard?: Card;
  @Input() playerClue: string;
  clueExist: boolean =false;
  selectedCards: Card[]=[];
  showSelectedCards: boolean=false;
  isCardChosen: boolean = false;

  clicked = false;

  constructor(public dialog: MatDialog, private router: Router,private ingameService: IngameService, private messageService: MessageService){
  }

  ngOnInit(): void {
    this.getCards();
    this.getClueSubject();
    this.getSelectedCardSubject();
  }

  cardClicked(index: number): void {
    this.selectedCard = this.cards[index];
    console.log(this.selectedCard.imageURL);
  }
  chooseCard(index: number): void{
      this.chosenCard = this.selectedCards[index];
      console.log(this.chosenCard.imageURL);
      this.isCardChosen=true;
  }
    SendCard() {
      if (this.selectedCard != null) {
          this.messageService.sendPlayerCard(this.selectedCard);
          this.showButton = false;
          this.showTick = true;
      }
    }
    SendChosenCard() {
        if (this.chosenCard != null) {
            this.messageService.sendChosenCard(this.chosenCard);
            this.showTick = true;
        }
    }
  getCards(): void {
      this.messageService.sendCardsToWs();

      this.messageService.getCardSubject().subscribe(value => {
          this.cards = value;
      });
  }
    getClueSubject(): void{
      this.messageService.getClueSubject().subscribe(value => {
          this.playerClue=value;
          this.clueExist=true;
      })
  }
    getSelectedCardSubject(): void{
        this.messageService.getSelectedCardSubject().subscribe(value => {
            this.selectedCards = value;
            this.showSelectedCards=true;
        })
  }
}
