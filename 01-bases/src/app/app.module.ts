import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './contador.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, ContadorComponent//class
  ],
  imports: [
    BrowserModule//class
  ],
  providers: [],
  bootstrap: [AppComponent]//a class
})
export class AppModule { }
