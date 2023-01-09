import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent {
  heroes: string[] = ['Ironman', 'Thor', 'Hulk'];
  deletedHeroe: string = '';
  heroe: string = 'cococha';
  deleteHeroe(): void {
    this.deletedHeroe = this.heroes.shift() || '';
  }
}
