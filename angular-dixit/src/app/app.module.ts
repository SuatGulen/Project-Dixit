import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {MainmenuComponent} from './mainmenu/mainmenu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {UserlistComponent} from "./ingame/userlist/userlist.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {CardsComponent} from './cards/cards.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {StorytellerComponent} from './ingame/storyteller/storyteller.component';
import {PlayerComponent} from './ingame/player/player.component';
import {IngameComponent} from './ingame/ingame.component';
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "./message.service";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainmenuComponent,
        UserlistComponent,
        CardsComponent,
        StorytellerComponent,
        PlayerComponent,
        IngameComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatRadioModule,
        MatCardModule,
        MatFormFieldModule,
        FlexModule,
        MatIconModule,
        MatGridListModule,
        MatToolbarModule,
        MatInputModule,
        HttpClientModule,
        MatListModule,
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
