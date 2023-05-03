import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {
  constructor() { }

  @Output() filterAll = new EventEmitter();
  @Output() filterRemaining = new EventEmitter();
  @Output() filterDone = new EventEmitter();

  ngOnInit(): void {
  }
}
