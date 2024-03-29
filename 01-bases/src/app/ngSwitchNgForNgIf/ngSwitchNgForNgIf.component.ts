import { Component } from "@angular/core";

@Component({
    selector: 'app-ngSwitchNgForNgIf',
    templateUrl: './ngSwitchNgForNgIf.component.html'
})
export class NgSwitchNgForNgIfComponent {
    armaduras = [
        'Mark I',
        'Mark II',
        'Mark III',
        'Mark IV',
        'Mark V',
        'Mark VI',
        'Mark XLII'
    ];
    ironman = 'Tony Stark';
    revelar_identidad = false; // cambiar por true
    default = true;
    usar = this.armaduras[2];
    superhero = 'Ironman';
    setState(e: any) {
        this.revelar_identidad = JSON.parse(e.target.value);
        console.log(this.revelar_identidad)
    }
    selectArmor(e: any) {
        const val = e.target.value;
        console.log(val)
        if (val) {
            this.usar = val;
            this.default = false;
        } else {
            this.usar = this.armaduras[2];
            this.default = true;
        }
    }
}