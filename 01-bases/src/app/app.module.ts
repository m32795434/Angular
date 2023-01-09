//js modules start
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountantModule } from './accountant/accountant.module';
import { AppComponent } from './app.component';
import { dataBindingComponent } from './dataBinding/dataBinding.component';
import { DbzModule } from './dbz/dbz.module';
import { TestingExpressions } from './expressions.component';
import { HelloComponent } from './hello.component';
import { HeroesModule } from './heroes/heroes.module';
//js modules end

@NgModule({
  declarations: [
    AppComponent,//class, that is a component, because its decorator. 
    TestingExpressions,
    HelloComponent,
    dataBindingComponent,
  ],
  imports: [//Other NgModules you are using, so that you can use their declarables.
    BrowserModule,//in order to use browser-specific services such as DOM rendering, sanitization, and location. Exports required infrastructure for all Angular apps. Included by default in all Angular apps created with the CLI new command. Re-exports CommonModule and ApplicationModule
    FormsModule,
    HeroesModule,
    AccountantModule,
    DbzModule],
  providers: [],//Providers of services that components in other NgModules can use.
  bootstrap: [AppComponent]//a class//El componente raíz
})
export class AppModule { }//class, that is a Module, because its decorator. An NgModule can export only the declarable classes it owns or imports from other NgModules
