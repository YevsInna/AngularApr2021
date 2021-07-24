import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello, Angular!';

  users=[
    {name:'Inna', age: 38, status: true},
    {name:'Maksim', age: 42, status: true},
    {name:'Bohdasya', age: 11, status: true},
    {name:'Nazar', age: 5, status: true},
  ]
}
