// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Pages
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [CardListComponent, HomePageComponent, SearchBoxComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
