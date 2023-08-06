// Angular
import { Component } from '@angular/core';

// Services
import { GifsService } from '../../services/gifs.service';

// Interfaces
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
