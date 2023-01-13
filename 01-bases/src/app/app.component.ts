import { Component } from '@angular/core';

interface element {
  nodeName: string,
  id: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  content: element = {
    nodeName: '',
    id: ''
  };
  recibir(e: any) {//recibe from its child dataBindingComponent
    console.log(e);
    this.content.nodeName = e.target.nodeName;
    this.content.id = e.target.id;

  }
}