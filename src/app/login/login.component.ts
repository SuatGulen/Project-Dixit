import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  OnClick(name: string):void{
    this.username=name;

    console.log(this.username);
    this.router.navigateByUrl('/mainmenu');

  }
}
