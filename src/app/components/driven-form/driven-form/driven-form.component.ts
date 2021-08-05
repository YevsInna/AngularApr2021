import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";
import {UserService} from "../../../services/user.service";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {
user={
  username: ''
}
  users: IUser[];

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users=value)
  }

  save(tref: HTMLFormElement) {

  }

  navigateToUserDetails():void {
    this.router.navigate(['users', this.user.id])
  }
}
