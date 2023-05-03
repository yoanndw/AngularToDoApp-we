import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from '../../model/todo';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnChanges {

  faTrashAlt = faTrashAlt;
  todos: Todo[] = [];

  @Input() filter = "all";

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {

    this.todoService.getTodos().subscribe(
      (todos) => {
        this.todos = todos;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on todos changes");
    this.todoService.getTodos().subscribe(
      (todos) => {
        this.todos = todos;
      });

  }

  changeStatus(todo: Todo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo);
  }

}
