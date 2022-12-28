//js modules start
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppAccounter } from './accountant/accountant.component';
import { AppComponent } from './app.component';
import { dataBindingComponent } from './dataBinding/dataBinding.component';
import { TestingExpressions } from './expressions.component';
import { HelloComponent } from './hello.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
//js modules end

@NgModule({
  declarations: [
    AppComponent,//class, that is a component, because its decorator. 
    TestingExpressions,
    HelloComponent,
    AppAccounter,
    HeroeComponent,
    dataBindingComponent
  ],
  imports: [//Other NgModules you are using, so that you can use their declarables.
    BrowserModule,//in order to use browser-specific services such as DOM rendering, sanitization, and location.
    FormsModule],
  providers: [],//Providers of services that components in other NgModules can use.
  bootstrap: [AppComponent]//a class//El componente raíz
})
export class AppModule { }//class, that is a Module, because its decorator. An NgModule can export only the declarable classes it owns or imports from other NgModules
