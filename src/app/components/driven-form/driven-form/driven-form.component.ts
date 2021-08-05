import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../models/IUser";
import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {
  userInfo: IUser;
  userId: number;
  users: IUser[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  save(tref: HTMLFormElement) {
    this.userService.getUserById(this.userId).subscribe(value => this.userInfo = value);
  }

}
