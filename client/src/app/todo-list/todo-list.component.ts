import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: Object;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTodoList().subscribe(todoList => {
      this.todoList = todoList;
    });
  }

}
