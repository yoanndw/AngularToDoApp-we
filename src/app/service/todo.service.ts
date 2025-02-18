import { Injectable } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {Todo} from './../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  // MODIF
  filter: "done" | "remaining" | "all";

  constructor() {
    this.todos = [
      {
        id: '111',
        title: "learn javascript",
        date: new Date(),
        isComplete: false
      } ,
      {
        id: '222',
        title: "learn webscript",
        date: new Date(),
        isComplete: true
      },
    ]

    this.filter = "all";
   }

    getTodos(){
      // MODIF
      return of(this.selectedTodos);
    // return of(this.selectedTodos).pipe(
    //   map((todos, i) => todos.filter(t => t.isComplete))
    // );
    }

   addTodo(todo: Todo){
     this.todos.push(todo);
   }

   changeStatus(todo: Todo){
     this.todos.map( singleTodo => {
       if(singleTodo.id === todo.id){
         todo.isComplete = !todo.isComplete;
       }
     })

   }

    // MODIF
    filterTodos(filter: "all" | "remaining" | "done") {
      this.filter = filter;
    }

    // MODIF
    get selectedTodos() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "remaining") {
        return this.todos.filter(t => !t.isComplete);
      } else if (this.filter == "done") {
        return this.todos.filter(t => t.isComplete);
      }

      return []; // N'arrive jamais
    }


   deleteTodo(todo: Todo){     

    const indexOfTodo = this.todos.findIndex(
      (currentObj) => {
        currentObj.id === todo.id;
      }
    )
    this.todos.splice(indexOfTodo,1);

   }
}
