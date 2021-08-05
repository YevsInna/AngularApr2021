import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DrivenFormComponent } from './components/driven-form/driven-form/driven-form.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './components/user/users.component';

let routes: Routes=[
  {
    path: 'https://jsonplaceholder.typicode.com/users', component: UsersComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    ReactiveFormComponent,
    DrivenFormComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
