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

  // Utilisé pour savoir quel filtre est sélectionné pour l'affichage des boutons
  filter: "all" | "done" | "remaining" = "all";

  ngOnInit(): void {
  }

  onFilterAll() {
    this.filterAll.emit();
    this.filter = "all";
  }

  onFilterRemaining() {
    this.filterRemaining.emit();
    this.filter = "remaining";
  }

  onFilterDone() {
    this.filterDone.emit();
    this.filter = "done";
  }

  // Créer les classes de boutons en fonction du filtre sélectionné
  // Regarde si le filtre sélectionné correspond au filtre qui doit l'être (expectedFilter) pour colorier le bouton
  buttonClasses(expectedFilter: "all" | "done" | "remaining") {
    return {
      "btn-primary": this.filter === expectedFilter,
      "btn-secondary": this.filter !== expectedFilter
    };
  }
}
