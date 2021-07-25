import { Component, OnInit } from '@angular/core';
import {IUserModel} from "../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: IUserModel[] =[
    {name: 'Max',age:25, status: true},
    {name: 'Inna',age:30, status: true},
    {name: 'Olya',age:15, status: false},
    {name: 'Kolya',age:17, status: true},
    {name: 'Ivan',age: 35, status: false},
    {name: 'Nazar',age:10, status: true},
    {name: 'Masha',age:20, status: false},
    {name: 'Dima',age:23, status: true},
    {name: 'Vova',age:41, status: false},
    {name: 'Mila',age:36, status: true},
  ]

  constructor() { }

 }
