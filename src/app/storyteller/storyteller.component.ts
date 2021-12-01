import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Card} from "../Card";
import {CARDS} from "../mock-cards";

@Component({
  selector: 'app-storyteller',
  templateUrl: './storyteller.component.html',
  styleUrls: ['./storyteller.component.css']
})
export class StorytellerComponent implements OnInit {

  cards = CARDS;
  showButton: boolean = false;
  selectedCard?: Card

  @Input() storyClue: string = "storyclue";

  constructor(public dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.shuffleArray(this.cards)
    this.cards=this.cards.sort(() => Math.random() - Math.random()).slice(0, 6)
  }

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }
  cardClicked(index: number): void {
    this.selectedCard = this.cards[index];
    console.log(this.selectedCard.imageId)
  }

  SendClue() {
    console.log(this.storyClue)
  }
}
