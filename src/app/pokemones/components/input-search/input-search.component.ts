import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent implements OnInit {
  @Input() placeholder: string = 'buscar....';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  pokemon: string = '';
  constructor() {}

  buscar() {
    if (this.pokemon === '') return;
    this.onEnter.emit(this.pokemon);
    this.pokemon = '';
  }

  ngOnInit(): void {}
}
