import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
// import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // ngOnInit() {
  //   const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
  //   popoverTriggerList.forEach(pop => {
  //     console.log(pop)
  //     new bootstrap.Popover(pop)
  //   })
  // }
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
