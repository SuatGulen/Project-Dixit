import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string="";
  message: any;
  clicked = false;


  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {

  }

  connect(): void {
      this.messageService.connect();
  }

     buttonClicked(): void {
        if(this.username != "") {
            this.messageService.addUser(this.username);

            setTimeout(() => {
                this.messageService.isClientHost(this.username);
                this.messageService.isStoryTeller(this.username);
            }, 500);

            this.router.navigateByUrl('/game/12345');
        }
    }
}
