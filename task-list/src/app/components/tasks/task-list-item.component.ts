import { Component, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input() task = TASKS[0];
  faTimes = faTimes;
}
