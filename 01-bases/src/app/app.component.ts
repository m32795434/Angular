import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'Contador';
  public acum = 10;
  public base = 5;
  public acumulate(value: number) {
    this.acum += value;
  }
}