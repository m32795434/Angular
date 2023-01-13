// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListingComponent } from './listing/listing.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent } from './heroes.component';
@NgModule({
    declarations: [HeroeComponent, ListingComponent, HeroesComponent],
    exports: [HeroesComponent],
    imports: [BrowserModule]
})
export class HeroesModule { }