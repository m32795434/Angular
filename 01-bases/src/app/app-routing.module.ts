import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppAccounter } from "./accountant/accountant/accountant.component";
import { TestingExpressions } from './expressions.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { DataBindingComponent } from './dataBinding/dataBinding.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { NgSwitchNgForNgIfComponent } from './ngSwitchNgForNgIf/ngSwitchNgForNgIf.component';
import { CatComponent } from './cats/cat.component';
const routes: Routes = [
    { path: 'accountant', component: AppAccounter },
    { path: 'expressions', component: TestingExpressions },
    { path: 'heroes', component: HeroeComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'mainDbz', component: MainPageComponent },
    { path: 'ngSwitch+ngFor', component: NgSwitchNgForNgIfComponent },
    { path: 'catApp', component: CatComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }