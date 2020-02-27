import {Component, OnInit} from '@angular/core';
import {Todo} from './models/todo.model';
import {APIService} from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'totdoExample';
  todos: Todo[] = [];

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
    this.apiService.ListToDos().then(
      value => {
          value.items.forEach(item => {
            this.todos.push(item);
          });
        });
  }
}
