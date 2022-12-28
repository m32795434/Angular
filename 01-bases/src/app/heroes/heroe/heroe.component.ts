import { Component } from '@angular/core';
@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    name: string = 'ironman';
    age: number = 45;
    showData(): string {
        return `${this.name} is ${this.age} years old`
    }
    get toUpperCaseName(): string {
        return this.name.toUpperCase();
    }
    changeName(): void {
        this.name = 'Hulk';
    }
    changeAge(): void {
        console.log('clicked!')
        this.age = 70;
    }
}