import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [MainPageComponent],
})
export class DbzModule { }
