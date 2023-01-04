import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  constructor(private dbzService: DbzService) { }
  newChar: Character = {
    name: 'Maestro Roshi',
    power: 1000,
  }
  /*
    //this child can send data to its father "app-main-page"
    @Output() onNewChar: EventEmitter<Character> = new EventEmitter();
    addChar(e:Event){
    this.onNewChar.emit(this.newChar);
    this.newChar = { name: '', power: 0 };
    }*/

  addChar(e: Event) {
    if (!(this.newChar.name.trim())) {
      return;
    }
    console.log(this.newChar);
    this.dbzService.addChar(this.newChar);
    this.newChar = { name: '', power: 0 };//we set another obj to lose reference to the earlier
    // const t: any = e.target;
    // if (t) { t.reset() }//reset form
  }
}
