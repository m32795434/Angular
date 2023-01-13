import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  recibir(e: Event) {//recibe from its child dataBindingComponent
    console.log(e);
  }
}