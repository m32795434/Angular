import { Component } from "@angular/core";

@Component({
    selector: 'app-accountant',
    template: `<h1>{{title}}</h1>
    <h3>La base es <strong>{{base}}</strong></h3>
    <button (click)="acumulate(-base)">-{{base}}</button>
    <span>{{acum}}</span>
    <button (click)="acumulate(base)">+{{base}}</button>`,
})
export class AppAccounter {
    public title = 'Contador';
    public acum = 10;
    public base = 5;
    public acumulate(value: number) {
        this.acum += value;
    }
}