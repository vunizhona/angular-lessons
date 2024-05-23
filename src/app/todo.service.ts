import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface TodoItem{
  userId: number;
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllToDos(): Observable<TodoItem[]>{
    return this.http.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
  }

}
