// Angular
import { Component, Input } from '@angular/core';

// Interfaces
import { Gif } from '../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
