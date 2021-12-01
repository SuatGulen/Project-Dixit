import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { MOCKUSERS} from "../mock-users";
import {User} from "../User";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  @ViewChild('userDetailDialog')
  userDetailDialog!: TemplateRef<any>;


  users = MOCKUSERS;
  selectedUser?: User;

  constructor(public dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSelect(){
    const userDetail = this.dialog.open(this.userDetailDialog, {

    });
    userDetail.afterClosed().subscribe((res) => {

      console.log({res});
    });

  }
}
