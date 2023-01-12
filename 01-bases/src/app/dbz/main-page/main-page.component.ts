import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  /*
  constructor(private dbzService: DbzService) { }
  // characters: Character[] = this.dbzService.characters;
  get characters(): Character[] {
    return this.dbzService.characters;
  }
  addNewChar(e: Character): void {
    this.characters.push(e);
  }
  */
  constructor() { }
}
