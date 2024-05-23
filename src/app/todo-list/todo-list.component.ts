import {Component, OnInit} from '@angular/core';
import {TodoItem, TodoService} from "../todo.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {map} from "rxjs";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  public error: HttpErrorResponse | undefined;
  public items: TodoItem[] | undefined;

  constructor(public todoService: TodoService)  {
  }

  ngOnInit(): void {
    this.todoService.getAllToDos().pipe(map((items: TodoItem[]) =>  items.map(item => ( {  ... item, title: item.title + "Modified"}) ))).subscribe(items => {
      this.items = items;
    }, error => this.error = error)
    console.log('This is end of the process')
  }

}
