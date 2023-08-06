// Angular
import { Component } from '@angular/core';

// Services
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tags(): string[] {
    return this.gifsService.tagHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
