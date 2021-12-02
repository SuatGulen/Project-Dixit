import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string="";

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.sharedMessage.subscribe(message => this.username = message)
  }


  OnClick(name: string):void{
    this.username=name;

    this.router.navigateByUrl('/mainmenu');

  }
}
