import {Injectable} from '@angular/core';
import * as Stomp from "webstomp-client";
import * as SockJS from "sockjs-client";
import {User} from "./User";
import {Subject} from "rxjs";
import {Card} from "./Card";

@Injectable()
export class MessageService {

    private userSubject = new Subject<User[]>();
    private cardSubject = new Subject<Card[]>();
    private isHostSubject = new Subject<string[]>();
    private isStSubject = new Subject<string[]>();
    private isStartedSubject = new Subject<string[]>();
    private clueSubject = new Subject<string>();
    private selectedCardSubject = new Subject<Card[]>();
    private isAllChosen = new Subject<string>();
    private nextRoundSubject = new Subject<string[]>();
    private usernameSubject = new Subject<string>();
    private answerCardSubject = new Subject<Card>();
    private cardSelected = new Subject<string[]>();

    socket: any
    stompClient: Stomp.Client | null = null;
    baseAddress = 'http://192.168.2.41:8080';

    connect(): void {
        this.socket = new SockJS(this.baseAddress + "/socket");
        this.stompClient = Stomp.over(this.socket);
        const that = this;
        this.stompClient.connect({}, frame => {
            that.stompClient?.subscribe('/user/queue/username', (message) => {
                this.usernameSubject.next(message.body);
            });
            that.stompClient?.subscribe('/topic/users', (message) => {
                this.userSubject.next(JSON.parse(message.body));
            });
            that.stompClient?.subscribe('/user/queue/cards', (message) => {
                const cardWs: Card[] = JSON.parse(message.body);
                this.cardSubject.next(cardWs);
            });
            that.stompClient?.subscribe('/user/queue/host', (message) => {
                this.isHostSubject.next(JSON.parse(message.body));
            });
            that.stompClient?.subscribe('/user/queue/storyteller', (message) => {
                this.isStSubject.next(JSON.parse(message.body));
            });
            that.stompClient?.subscribe('/topic/start', (message) => {
                this.isStartedSubject.next(JSON.parse(message.body))
            });
            that.stompClient?.subscribe('/topic/clue', (message) => {
                this.clueSubject.next(message.body);
            });
            that.stompClient?.subscribe('/topic/selectedcards', (message) => {
                const selectedCardWs: Card[] = JSON.parse(message.body);
                this.selectedCardSubject.next(selectedCardWs);
            });
            that.stompClient?.subscribe('/topic/allchosen', (message) => {
                this.isAllChosen.next("true");
                this.answerCardSubject.next(JSON.parse(message.body));
            });
            that.stompClient?.subscribe('/topic/nextround', (message) => {
                this.nextRoundSubject.next(JSON.parse(message.body));
            });

        });
    }

    disconnect(): void {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
    }
    addUser(msg: any) {
        this.stompClient?.send("/adduser",msg);
    }
    updateUsers(){
        this.stompClient?.send("/updateusers");
    }

    sendCardsToWs() {
        this.stompClient?.send("/cards");
    }

    isClientHost(username: string) {
        this.stompClient?.send("/host", username);
    }

    isStoryTeller(username: string) {
        this.stompClient?.send("/storyteller", username);
    }

    startGame() {
        this.stompClient?.send("/start");
    }

    sendClue(storyClue: string) {
        this.stompClient?.send("/clue", storyClue);
    }
    sendStCard(selectedCard: Card) {
        this.stompClient?.send("/stselectedcard", JSON.stringify(selectedCard));
    }

    sendPlayerCard(selectedCard: Card) {
            this.stompClient?.send("/playerselectedcard", JSON.stringify(selectedCard));
    }
    sendChosenCard(chosenCard: Card) {
                this.stompClient?.send("/playerchosencard", JSON.stringify(chosenCard));
    }
    nextRound() {
        this.stompClient?.send("/nextround");
    }


    getAllUsersSubject(): Subject<User[]> {
        return this.userSubject;
    }
    getUsernameSubject(): Subject<string>{
        return this.usernameSubject;
    }

    getCardSubject(): Subject<Card[]> {
        return this.cardSubject;
    }

    getIssHostSubject(): Subject<string[]> {
        return this.isHostSubject;
    }

    getIsStSubject(): Subject<string[]> {
        return this.isStSubject;
    }

    getIsGameStartedSubject(): Subject<string[]> {
        return this.isStartedSubject;
    }

    getClueSubject(): Subject<string>{
        return this.clueSubject;
    }

    getSelectedCardSubject(): Subject<Card[]>{
        return this.selectedCardSubject;
    }
    getIsAllChosen(): Subject<string> {
        return this.isAllChosen;
    }

    getNextRoundSubject(): Subject<string[]> {
        return this.nextRoundSubject;
    }

    getAnswerCardSubject(): Subject<Card>{
        return this.answerCardSubject;
    }

}
