import {Component, ViewEncapsulation} from '@angular/core';
import { MessageService } from "./message.service";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor() {}
    imageUrl: string = "https://play-dixit.online/dixit.png";

}
