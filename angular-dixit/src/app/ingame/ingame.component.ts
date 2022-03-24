import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MessageService} from "../message.service";
import {Card} from "../Card";
import {User} from "../User";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-ingame',
    templateUrl: './ingame.component.html',
    styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

    @ViewChild('createDialog')
    createDialog!: TemplateRef<any>;

    @Input() users: User[] = [];
    cards: Card[] = [];
    answerCard: Card;
    username: string = "";
    gameStarted: string[];
    isHost: string[];
    isSt: string[];
    allChosen: string;
    isDialogOpen: string = "false";

    clicked = false;

    constructor(public dialog: MatDialog, private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.getIssHostSubject();
        this.getIsStSubject();
        this.getUsername();
        this.getIsGameStartedSubject();
        this.getAllUsersSubject();
        this.getNextRoundSubject()
        this.getIsAllChosen();
        this.getAnswerCardSubject();
    }

    startButton() {
        this.messageService.startGame();
    }

    getIssHostSubject() {
        this.messageService.getIssHostSubject().subscribe(value => {
            this.isHost = value;
        });
    }

    getIsStSubject() {
        this.messageService.getIsStSubject().subscribe(value => {
            this.isSt = value;
        });
    }

    getIsGameStartedSubject() {
        this.messageService.getIsGameStartedSubject().subscribe(value => {
            this.gameStarted = value;
        });
    }

    getUsername() {
        this.messageService.getUsernameSubject().subscribe(value => {
            this.username = value;
        });
    }

    getAllUsersSubject() {
        this.messageService.getAllUsersSubject().subscribe(value => {
            this.users = value;
        });
    }

    getNextRoundSubject() {
        this.messageService.getNextRoundSubject().subscribe(value => {
            this.isSt = [];
            this.messageService.isStoryTeller(this.username);
        })
    }

    getAnswerCardSubject(){
        this.messageService.getAnswerCardSubject().subscribe(value => {
            this.answerCard= value;
        })
    }

    getIsAllChosen(): void{
        this.messageService.getIsAllChosen().subscribe(value => {
            this.allChosen = value;

            if(value && this.isDialogOpen === "false"){
                 const dialogRef = this.dialog.open(this.createDialog, {
                 });
                 dialogRef.afterClosed().subscribe((res) => {
                     this.isDialogOpen="false";
                 });
            }
        })

    }
}
