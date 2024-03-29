import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

// const form = document.querySelector(''); es mas facil hacerlo con con un querySelector creo jaja
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title = 'My task-list';
  showAddTask = false;
  subscription?: Subscription;
  //SUBJECT NEXT ASOBSERVABLE SUBSCRIBE 
  // WE CREATE A SUBSCRIPTION - OTHER WAY TO DO A SUBSCRIBER

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
      console.log(value)
    });
  }
  // toggleAddTask() {
  //   this.uiService.toggleAddTask();
  // }

  //ROUTER.URL
  hasHeaderRoute(str: string): boolean {
    return this.router.url === str;
  }
}
