import { NgModule } from "@angular/core";
import { AppAccounter } from "./accountant.component";
import { ScientificAccountantComponent } from './scientific-accountant.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [AppAccounter, ScientificAccountantComponent],
    exports: [AppAccounter],
    imports: [AppRoutingModule]
})
export class AccountantModule { }