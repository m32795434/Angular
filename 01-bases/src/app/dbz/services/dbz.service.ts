import { Injectable } from '@angular/core'
import { Character } from '../interfaces/dbz.interface';
@Injectable()
export class DbzService {
    private _characters: Character[] = [{ name: 'Goku', power: 15000 }, { name: 'Vegeta', power: 7500 }];
    get characters(): Character[] {
        return JSON.parse(JSON.stringify(this._characters));
    }
    constructor() {
        console.log('initialized DbzService')
    }
    addChar(char: Character) {
        this._characters.push(char);
    }
}

