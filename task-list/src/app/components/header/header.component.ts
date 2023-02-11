import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title = 'My task-list'
  toggleAddTask() {
    console.log('toggleAddTask');
  }
}
