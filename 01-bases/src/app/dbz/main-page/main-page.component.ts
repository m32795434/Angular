import { Component } from '@angular/core';

interface Character {
  name: string,
  power: number
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  newChar: Character = {
    name: 'Trunks',
    power: 14000,
  }
  addChar() {
    console.log(this.newChar)
  }
}
