import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  connect(){
    return this.http.get('/api/connection');
  }

  getTodoList(){
    return this.http.get('/api/todoList');
  }
}
