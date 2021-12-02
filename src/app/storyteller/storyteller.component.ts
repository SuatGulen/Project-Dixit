import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Card} from "../Card";

@Component({
  selector: 'app-storyteller',
  templateUrl: './storyteller.component.html',
  styleUrls: ['./storyteller.component.css']
})
export class StorytellerComponent implements OnInit {

  cards: Card[];
  showButton: boolean = false;
  selectedCard?: Card
  @Input() storyClue: string = "storyclue";

  constructor(public dialog: MatDialog,) {
    this.cards=[];
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
  }

  SendClue() {
    console.log(this.storyClue)
  }
}
