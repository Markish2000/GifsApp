// Angular
import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
