import { Component } from "@angular/core";


@Component({
    selector: 'app-dataBinding',
    templateUrl: 'dataBinding.html'
})
export class dataBindingComponent {
    shouldHidde = true;//we have a hidden Directive(), a hidden attribute and property. They are working together. This may bring us conflict
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

    cambiaDni(valor: any) {
        // Podes consultar el valor por consola
        console.log(valor);
        this.dni = valor;
    }

    onClick() {
        alert('Hiciste click!!');
    }
}