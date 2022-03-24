import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {User} from "../../User";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MessageService} from "../../message.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

    @ViewChild('userDetailDialog')
    userDetailDialog!: TemplateRef<any>;



    @Input() users: User[] = [];
    userCount: number;
    stLogo: string = "https://www.pikpng.com/pngl/b/70-704803_11-small-edit-pencil-icon-png-images-small.png";
    tickLogo: string = "https://www.seekpng.com/png/full/802-8025058_ok-check-todo-agenda-icon-symbol-tick-to.png";
    @Input() showTick: Boolean = false;

    selectedUser?: User;
    allChosen: boolean=false;

    constructor(public dialog: MatDialog, private router: Router, private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.updateUsers();
        this.getUsers();
        this.getNextRoundSubject();
        this.getSelectedCardSubject();
        this.getIsAllChosen();
    }

    onSelect() {
        const userDetail = this.dialog.open(this.userDetailDialog, {});
        userDetail.afterClosed().subscribe((res) => {
            console.log({res});
        });
    }

    updateUsers(){
        this.messageService.updateUsers();
    }

    getUsers() {
        this.messageService.getAllUsersSubject().subscribe(value => {
            this.users = value;
        });
    }
    getNextRoundSubject(){
        this.messageService.getNextRoundSubject().subscribe(value => {
            if(value){
                this.updateUsers();
            }
        })
    }
    getSelectedCardSubject(): void{
        this.messageService.getSelectedCardSubject().subscribe(value => {
            this.showTick = false;
        })
    }

    getIsAllChosen(): void{
        this.messageService.getIsAllChosen().subscribe(value => {

            this.showTick=false;
        })
    }
}
