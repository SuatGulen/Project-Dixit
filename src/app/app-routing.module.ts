import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainmenuComponent} from "./mainmenu/mainmenu.component";
import {UserlistComponent} from "./userlist/userlist.component";
import {StorytellerComponent} from "./storyteller/storyteller.component";
import {PlayerComponent} from "./player/player.component";
import {IngameComponent} from "./ingame/ingame.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'mainmenu', component: MainmenuComponent },
  {
    path: 'game/:gamecode', component: IngameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
