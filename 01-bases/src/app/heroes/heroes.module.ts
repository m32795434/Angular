// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListingComponent } from './listing/listing.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [HeroeComponent, ListingComponent],
    exports: [HeroeComponent, ListingComponent],
    imports: [BrowserModule]
})
export class HeroesModule { }