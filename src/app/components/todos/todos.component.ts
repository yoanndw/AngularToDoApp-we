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

  @Input() filter: "all" | "done" | "remaining" = "all";

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    console.log("on todos init");
    this.todoService.getTodos().subscribe(
      (todos) => {
        this.todos = todos;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.todoService.getTodos().subscribe(
    //   (todos) => {
    //     this.todos = todos;
    //   });

    // Quand changement de filtre => update
    let newFilter = changes.filter.currentValue;
    this.todoService.filterTodos(newFilter);

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
