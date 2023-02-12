import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  constructor(private taskSrv: TaskService) { }
  tasks: Task[] = [];
  ngOnInit(): void {
    this.taskSrv.getTasks().subscribe((tasks) => { this.tasks = tasks });
  }
}
