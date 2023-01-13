//js modules start
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountantModule } from './accountant/accountant.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './dataBinding/dataBinding.component';
import { DbzModule } from './dbz/dbz.module';
import { TestingExpressions } from './expressions.component';
import { HelloComponent } from './hello.component';
import { HeroesModule } from './heroes/heroes.module';
import { HiddenDirective } from './dataBinding/hidden.directive';
import { NgSwitchNgForNgIfComponent } from './ngSwitchNgForNgIf/ngSwitchNgForNgIf.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDropdownConfig } from './dropDown-config';
import { NgbdPopoverAutoclose } from './popOverAutoClose';
import { CatModule } from './cats/cat.module';
import { AppRoutingModule } from './app-routing.module';
import { DataBindingWrapperComponent } from './dataBinding/data-binding-wrapper/data-binding-wrapper.component';

//js modules end

@NgModule({
  declarations: [
    AppComponent,//class, that is a component, because its decorator. 
    TestingExpressions,
    HelloComponent,
    DataBindingComponent,
    HiddenDirective,
    NgSwitchNgForNgIfComponent,
    DataBindingWrapperComponent
  ],
  imports: [//Other NgModules you are using, so that you can use their declarables.
    BrowserModule,//in order to use browser-specific services such as DOM rendering, sanitization, and location. Exports required infrastructure for all Angular apps. Included by default in all Angular apps created with the CLI new command. Re-exports CommonModule and ApplicationModule
    FormsModule,
    HeroesModule,
    AccountantModule,
    DbzModule,
    NgbModule, NgbdDropdownConfig, NgbdPopoverAutoclose, CatModule, AppRoutingModule],
  providers: [],//Here: Providers of services that components in other NgModules can use.(It's for the root injector)
  bootstrap: [AppComponent]//a class//El componente raíz
})
export class AppModule { }//class, that is a Module, because its decorator. An NgModule can export only the declarable classes it owns or imports from other NgModules
