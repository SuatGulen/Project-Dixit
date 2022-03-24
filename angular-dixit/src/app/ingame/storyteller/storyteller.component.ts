import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Card} from "../../Card";
import {Router} from "@angular/router";
import {IngameService} from "../../ingame.service";
import {MessageService} from "../../message.service";
import {User} from "../../User";

@Component({
  selector: 'app-storyteller',
  templateUrl: './storyteller.component.html',
  styleUrls: ['./storyteller.component.css']
})
export class StorytellerComponent implements OnInit {

    cards: Card[]=[];
    @Input() selectedCard?: Card;
    chosenCard?: Card;
    @Input() storyClue: string = "";
    showButton: boolean = true;
    selectedCards: Card[]=[];
    showSelectedCards: boolean= false;
    isAllChosen: string;


    showScoreBoard: boolean=false;

    clicked = false;

    constructor(private router: Router,private ingameService: IngameService, private messageService: MessageService){
    }

  ngOnInit(): void {
      this.getCards();
      this.getIsAllChosen();
      this.getSelectedCardSubject();
  }

    cardClicked(index: number): void {
        this.selectedCard = this.cards[index];
        console.log(this.selectedCard.imageURL)
    }
    chooseCard(index: number): void{
        this.chosenCard = this.cards[index];
    }
    getCards(): void {
        this.messageService.sendCardsToWs();

        this.messageService.getCardSubject().subscribe(value => {
            this.cards = value;
        });
    }
    SendClueAndCard() {
        if(this.storyClue != "" && this.selectedCard != null) {
            this.messageService.sendClue(this.storyClue);
            this.messageService.sendStCard(this.selectedCard);
            this.showButton = false;
        }
  }
    nextRound(){
        setTimeout(() => {
            this.messageService.nextRound();
        }, 300);
        this.messageService.updateUsers();
    }

    getSelectedCardSubject(): void{
        this.messageService.getSelectedCardSubject().subscribe(value => {
            this.selectedCards = value;
            this.showSelectedCards=true;
        })
    }
    updateUsers(){
        this.messageService.updateUsers();
    }

    getIsAllChosen(): void{
        this.messageService.getIsAllChosen().subscribe(value => {
            this.isAllChosen = value;

            if(value){
                this.updateUsers();
            }
        })
    }
}


