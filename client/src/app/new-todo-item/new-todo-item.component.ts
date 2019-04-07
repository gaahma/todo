import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.scss']
})
export class NewTodoItemComponent implements OnInit {
  public title="";
  public notes="";
  public completed=false;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const {title, notes, completed} = this;
    this.api.createTodoItem({title, notes, completed}).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
