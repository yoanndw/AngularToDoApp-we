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
  filter: "done" | "remaining" | "all";
  selectedTodos: Todo[];

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

    this.selectedTodos = this.todos;
    this.filter = "all";
   }

    getTodos(){
      return of(this.selectedTodos);
    // return of(this.selectedTodos).pipe(
    //   map((todos, i) => todos.filter(t => t.isComplete))
    // );
    }

   addTodo(todo: Todo){
     this.todos.push(todo);
    this.updateSelectedTodos();
   }

   changeStatus(todo: Todo){
     this.todos.map( singleTodo => {
       if(singleTodo.id === todo.id){
         todo.isComplete = !todo.isComplete;
       }
     })

   }

    filterTodos(filter: "all" | "remaining" | "done") {
      this.filter = filter;
      if (filter == "all") {
        this.selectedTodos = this.todos;
      } else if (filter == "remaining") {
        this.selectedTodos = this.todos.filter(t => !t.isComplete);
      } else if (filter == "done") {
        this.selectedTodos = this.todos.filter(t => t.isComplete);
      }
    }

    // Met à jour la liste des todos sélectionnées lorsqu'on en ajoute ou supprime
    updateSelectedTodos() {
      if (this.filter == "all") {
        this.selectedTodos = this.todos;
      } else if (this.filter == "remaining") {
        this.selectedTodos = this.todos.filter(t => !t.isComplete);
      } else if (this.filter == "done") {
        this.selectedTodos = this.todos.filter(t => t.isComplete);
      }
    }


   deleteTodo(todo: Todo){     

    const indexOfTodo = this.todos.findIndex(
      (currentObj) => {
        currentObj.id === todo.id;
      }
    )
    this.todos.splice(indexOfTodo,1);

    this.updateSelectedTodos();
   }
}
