import { Component } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  tasks: Task[] = TASKS
}
