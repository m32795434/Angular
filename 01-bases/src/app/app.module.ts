import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './contador/contador.component';
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/herore/heroe.component';
@NgModule({
  declarations: [
    AppComponent, ContadorComponent, HeroeComponent//class
  ],
  imports: [
    BrowserModule//class
  ],
  providers: [],
  bootstrap: [AppComponent]//a class
})
export class AppModule { }
