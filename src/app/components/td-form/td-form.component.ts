import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
user = {
  username: 'Inna',
  password:'1111',
  status: false,
  gender:'',
  level:[]
}

  constructor() { }

  ngOnInit(): void {
  }

  save(tref: HTMLFormElement) {
    console.log(this.user)
  }
}
