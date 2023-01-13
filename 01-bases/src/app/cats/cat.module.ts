import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CatService } from "./cat.service";
import { CatListComponent } from './catList.component';
import { CatComponent } from './cat.component';

@NgModule({
    declarations: [CatListComponent, CatComponent],
    exports: [CatComponent],
    imports: [BrowserModule, FormsModule],
    providers: [CatService]
})
export class CatModule { }