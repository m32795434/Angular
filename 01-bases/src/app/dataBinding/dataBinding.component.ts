import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-dataBinding',
    templateUrl: 'dataBinding.html'
})
export class DataBindingComponent {
    shouldHidde = false;//we have a hidden Directive(which could do anything, and it's applied always)and a hidden property binding[].
    firstName: string = 'Manuel';
    lastName: string = 'Bravard';
    blue: string = 'blue';
    myFunction(): void {
        alert('Showing alert!');
    }
    val: string = '';

    //Arg Programa
    nombre: string = '';
    telefono = '';
    dni = '';
    clicked = '';

    cambiaDni(valor: any) {
        // Podes consultar el valor por consola
        console.log(valor);
        this.dni = valor;
    }
    @Output() emiter: EventEmitter<Event> = new EventEmitter();
    enviar(e: Event) {
        this.emiter.emit(e);
    }
}