import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import {RouterModule, Routes} from "@angular/router";
// import * as path from "path";
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UserGuardService} from "./servises/user-guard.service";

let routes: Routes=[
  {path: '', component: UsersComponent, canDeactivate: [UserGuardService]},
  {path:'users/:id', component:UserDetailsComponent, canActivate:[UserGuardService],canDeactivate:[UserGuardService]},
  {path: 'users', redirectTo:'', pathMatch: 'full'}
  ];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
