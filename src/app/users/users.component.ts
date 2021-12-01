import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import{MOCKUSERS} from "../mock-users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  mockusers= MOCKUSERS;

  constructor() { }

  ngOnInit(): void {
  }
}