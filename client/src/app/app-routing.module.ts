import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {EditTodoItemComponent} from './edit-todo-item/edit-todo-item.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';


const routes: Routes = [
  {path: '', component: TodoListComponent},
  {path: 'item/new', component: NewTodoItemComponent},
  {path:'item/:_id', component: EditTodoItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
