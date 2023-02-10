import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
})
export class TaskListItemComponent {
  @Input() task = '';
}
