import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
  //@Input('asSomething')
  // @Input() chars: Character[] = [];

  // Parameter Properties -->private dbzService: DbzService
  // TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value.
  constructor(private dbzService: DbzService, private actRoute: ActivatedRoute) { }
  get characters(): Character[] { return this.dbzService.characters; }
  selected = '';
  selectedStory = 'Here the story';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.actRoute.params.subscribe((param: Params) => {

    });
  }
}
