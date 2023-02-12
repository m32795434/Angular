import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
import { TaskIterface } from '../../task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  constructor(private taskService: TaskService) { }
  // private apiUrl = 'http://localhost:5000/tasks';
  @Input() task: TaskIterface = {
    id: 1,
    text: '',
    day: '',
    reminder: true,
  };
  faTimes = faTimes;
  onDelete() {
    console.log('deleting item', this.task)
  }

}
