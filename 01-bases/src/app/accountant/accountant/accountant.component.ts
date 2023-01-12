import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-accountant',
    template: `<h1>{{title}}</h1>
    <h3>La base es <strong>{{base}}</strong></h3>
    <button (click)="acumulate(-(base)! || 1)">-{{base || 1}}</button>
    <span>{{acum}}</span>
    <button (click)="acumulate((base) || 1)">+{{base || 2}}</button>
    
    <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        `,

})
export class AppAccounter {

    public title = 'Contador';
    public acum = 10;
    public base = undefined;
    public acumulate(value: number) {
        this.acum += value;
    }
}