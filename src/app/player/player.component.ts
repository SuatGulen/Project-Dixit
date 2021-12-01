import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Card} from "../Card";
import {CARDS} from "../mock-cards";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  cards = CARDS;
  showButton: boolean = false;
  selectedCard?: Card
  @Input() playerClue: String=""

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
    console.log("clicked")
    this.selectedCard = this.cards[index];
    console.log(this.selectedCard.imageId)
  }
}
