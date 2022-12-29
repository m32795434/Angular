import { NgModule } from "@angular/core";
import { AppAccounter } from "./accountant/accountant.component";

@NgModule({
    declarations: [AppAccounter],
    exports: [AppAccounter]
})
export class AccountantModule { }