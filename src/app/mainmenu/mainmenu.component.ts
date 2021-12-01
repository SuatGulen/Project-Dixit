import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  @ViewChild('createDialog')
  createDialog!: TemplateRef<any>;
  @ViewChild('joinDialog')
  joinDialog!: TemplateRef<any>;

  randomRoomCode: String = "12345"

  playerNumber: number=6;

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }

  CreateGame() {
    const gameRules = this.dialog.open(this.createDialog, {

      // write rules
    });
    gameRules.afterClosed().subscribe((res) => {

    });

  }

  Join() {
    const joinGame = this.dialog.open(this.joinDialog, {

      // join referred code
    });
    joinGame.afterClosed().subscribe((res) => {

    });

  }

  CreateGameDialog() {
    console.log("game created with "+this.playerNumber +" players Game Code:"+ this.randomRoomCode)
    this.router.navigateByUrl('/game/' + this.randomRoomCode);
  }

  JoinGameDialog(code: String):void{
    //  create game lobby
    console.log("join game "+code);
  }

  onItemChange(value: any) {

  }
}
