import { Component } from "@angular/core";
@Component({
  selector: 'testingExpressions',
  template: `<!-- Usos simples -->
    <h2>Ejemplos de usos simples de expresiones</h2>
    <div>
      <ul>
        <!-- Computar una suma-->
        <li>{{ 5 + 5 }}</li>
    
        <!-- Concatenar varibales-->
        <li>{{ fruta + ' ' + verdura }}</li>
    
        <!-- Mostrar propiedades de un objeto -->
        <li>
          la ciudad de {{ ciudad.nombre }} tiene {{ ciudad.poblacion }} habitantes
        </li>
    
        <!-- Formatear salidas  -->
        <li>{{ pi | number: '1.1-4' }}</li>
    
        <!-- Acceder metódos de la instancia -->
        <li>Fruta tiene: {{ fruta.length }} letras</li>
    
        <!-- Llamar a funciones del controlador -->
        <li>{{ helloWorld() }}</li>
        <li>{{birthday | date:'dd/MM/YYYY hh:mm a zzzz'}}</li>
      </ul>
      
<hello name="Pepe"></hello>

</div>
    `,
})
export class TestingExpressions {
  fruta: string = 'manzana';
  verdura: string = 'lechuga';
  pi: number = 3.14159265359;
  birthday: Date = new Date(1987, 3, 30, 19, 50);
  ciudad = {
    nombre: 'Bahía Blanca',
    poblacion: 284776,
  };
  helloWorld = () => {
    return 'Hola mundo!';
  };
}
