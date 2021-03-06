import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../Card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    isSelected: boolean= false;
    src: HTMLImageElement

  @Input() data?: Card;

  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {


  }
}
