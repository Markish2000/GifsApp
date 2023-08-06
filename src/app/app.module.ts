// Angular
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GifsModule, HttpClientModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
