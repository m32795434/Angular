import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-accountant',
    template: `<h1>{{title}}</h1>
    <h2>Do you understand what's happenig?😎</h2>
    <h3>La base es <strong>{{base}}</strong></h3>
    <button (click)="acumulate(-(base)! || -1)">- {{base || 1}}</button>
    <span> {{acum}} </span>
    <button (click)="acumulate((base) || 1)">+ {{base || 2}}</button>
    <router-outlet></router-outlet>`,

})
export class AppAccounter {

    public title = 'Contador';
    public acum = 10;
    public base = undefined;
    public acumulate(value: number) {
        this.acum += value;
    }
}