import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  characters: Character[] = [{ name: 'Goku', power: 15000 }, { name: 'Vegeta', power: 7500 }];
  newChar: Character = {
    name: '',
    power: 0,
  }
  addChar(e: Event) {
    if (!(this.newChar.name.trim())) {
      return;
    }
    this.characters.push(this.newChar);
    // const t: any = e.target;
    // if (t) { t.reset() }
    this.newChar = { name: '', power: 0 };//we set another obj to lose reference to the earlier
  }
}
