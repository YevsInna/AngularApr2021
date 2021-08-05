import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";

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

  constructor() { }

  ngOnInit(): void {
  }

  save(tref: HTMLFormElement) {

  }
}
