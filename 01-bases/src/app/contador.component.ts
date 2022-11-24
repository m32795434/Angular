import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{title}} </h1>

    <h3>La base es <strong>{{base}}</strong></h3>

    <button (click)=acumulate(base)>{{base}}</button>
    <span> {{number1}} </span>
    <!-- the same with or without quotes. Why?-->
    <button (click)="acumulate(-base)">-{{base}}</button>
    `
})
export class ContadorComponent {
    public title: string = 'Contador App';
    public number1: number = 10;
    public base: number = 5;

    public acumulate(acum: number): void {
        this.number1 += acum;
    }
} 