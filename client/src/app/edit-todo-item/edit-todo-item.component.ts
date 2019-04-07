import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {ApiService} from '../api.service';

@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.scss']
})
export class EditTodoItemComponent implements OnInit {
  title: String = "";
  notes: String="";
  completed: Boolean = false;
  _id: String;

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.onLoad();
  }

  onLoad(){
    this._id = this.route.snapshot.paramMap.get('_id');
    this.api.getTodoItem(this._id).subscribe((item: any) => {
      this.title = item.title;
      this.notes = item.notes;
      this.completed = item.completed;
    });
  }

  onUpdate(){
    const {title, notes, completed, _id} = this;
    this.api.updateTodoItem({title, notes, completed, _id}).subscribe((data) =>{
      this.router.navigate(['/']);
    }, 
    error => {
      console.log(error);
    });
  }

  onDelete(){
    this.api.delTodoItem(this._id).subscribe(() => {
      this.router.navigate(['/']);
    },
    error => {
      console.log(error);
    })
  }

}
