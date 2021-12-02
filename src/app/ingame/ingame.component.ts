import {Component,OnInit, ViewChild} from '@angular/core';
import {StorytellerComponent} from "../storyteller/storyteller.component";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../login.service";
import {Card} from "../Card";

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  parentClue!: string;
  username:string="";
  cards: Card[] = [];


  @ViewChild(StorytellerComponent)
  set appStoryteller(storyteller: StorytellerComponent) {
    this.parentClue = storyteller.storyClue;
    console.log(this.parentClue)
  };

@ViewChild(LoginComponent)
  set appLogincomponent(logincomponent: LoginComponent) {
    this.username = logincomponent.username;
  };

  constructor(private loginService: LoginService,) { }

  ngOnInit(): void {
    this.loginService.sharedMessage.subscribe(message => this.username = message)
  }

  newMessage() {
    this.loginService.nextMessage("Second Message")
  }

}
