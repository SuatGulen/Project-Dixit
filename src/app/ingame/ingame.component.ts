import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {StorytellerComponent} from "../storyteller/storyteller.component";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  parentClue!: string;
  @Input() username:string="";

  @ViewChild(StorytellerComponent)
  set appStoryteller(storyteller: StorytellerComponent) {
    this.parentClue = storyteller.storyClue;
    console.log(this.parentClue)
  };

@ViewChild(LoginComponent)
  set appLogincomponent(logincomponent: LoginComponent) {
    this.username = logincomponent.username;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
