import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: ['p {background-color:grey;padding:2rem;color:white;font-size:2rem;margin:1rem;}',]
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

  functionSwitch(value: string) {
    switch (value) {
      case 'vegeta':
        this.selectedStory = "Vegeta Story"
        break;
      case 'crilin':
        this.selectedStory = "Crilin Story"
        break;
      case 'goku':
        this.selectedStory = "Goku Story"
        break;
      default:
        this.selectedStory = "Don't have a story yet"
        break;
    }
  }
  selectChar(e: any) {
    const val = e.target.value.trim().toLocaleLowerCase();
    this.functionSwitch(val);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.actRoute.params.subscribe((param: Params) => {
      const name = param['name'].toString();
      console.log(name);
      this.functionSwitch(name);
    });
  }
}
