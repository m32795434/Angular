import { Component } from "@angular/core";

@Component({
    selector: 'app-accountant',
    template: `<h1>{{title}}</h1>
    <h3>La base es <strong>{{base}}</strong></h3>
    <button (click)="acumulate(-(base)! || 1)">-{{base || 1}}</button>
    <span>{{acum}}</span>
    <button (click)="acumulate((base) || 1)">+{{base || 2}}</button>`,
})
export class AppAccounter {
    public title = 'Contador';
    public acum = 10;
    public base = undefined;
    public acumulate(value: number) {
        this.acum += value;
    }
}