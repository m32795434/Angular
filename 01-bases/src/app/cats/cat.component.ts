import { Component } from "@angular/core";

@Component({
    selector: 'app-cat',
    templateUrl: './cat.component.html'
})
export class CatComponent {
    say: string = '';
    toSayFather: string = '';
    onSay(message: string) {
        this.toSayFather = message;
    }
}