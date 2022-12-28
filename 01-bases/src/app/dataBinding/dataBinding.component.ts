import { Component } from "@angular/core";


@Component({
    selector: 'app-dataBinding',
    template: `
    <!-- data binding: from the component to the view -->

    <!-- using the interpolation technique.  -->
    <div><strong>{{firstName}}</strong></div>
    <!-- Let's consider another example using property binding. -->
    <span [innerHTML]="lastName"></span>
    <!-- example of style binding (property binding). -->
    <h1 [style.color]="blue">I am a blue h1</h1>

    <!-- From View to Component, One-way data binding-->

    <!-- event binding technique. -->
    <!-- Template statements are methods or properties that you can use in your HTML to respond to user events.  -->
    <!-- (target event like) = Template statements -->
<button (click)="myFunction()">Show Alert</button>

<!-- Two-way Data Binding in Angular -->
<!-- Two-way data binding in Angular will help users to exchange data from the component to view and from view to the component.  -->
<!--data binding using (ngModel), which is basically the combination of both the square brackets of property binding and parentheses of the event binding. -->
<br>
Please enter some text:<input type="text" [(ngModel)]="val"><br>
Text entered: {{val}}`
})
export class dataBindingComponent {
    firstName: string = 'Manuel';
    lastName: string = 'Bravard';
    blue: string = 'blue';
    myFunction(): void {
        alert('Showing alert!');
    }
    val: string = '';
}