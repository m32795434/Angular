import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  @Input() characters: Character[] = [];
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
