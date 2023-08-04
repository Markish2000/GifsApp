// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GifsModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
