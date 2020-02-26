import {Component, OnInit} from '@angular/core';
import {Todo} from "./models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'totdoExample';
  todos: Todo[];

  constructor() {
  }

  ngOnInit() {
    this.todos = [
      {
        id: 'UUID1',
        name: 'Todo1',
        desc: 'Description1'
      },
      {
        id: 'UUID2',
        name: 'Todo2',
        desc: 'Description2'
      }
    ];
  }
}
