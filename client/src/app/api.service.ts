import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTodoList(){
    return this.http.get('/api/todoList');
  }

  getTodoItem(_id: String){
    return this.http.get(`/api/todoItem/${_id}`)
  }

  createTodoItem(item: Object){
    return this.http.post("/api/todoItem", item);
  }
  
  delTodoItem(_id: String){
    return this.http.delete(`/api/todoItem/${_id}`)
  }

  updateTodoItem(item: Object){
    return this.http.put(`/api/todoItem`, item);
  }

}
