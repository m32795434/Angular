import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskIterface } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  constructor(private taskSrv: TaskService) { }
  tasks: TaskIterface[] = [];
  ngOnInit(): void {
    this.taskSrv.getTasks().subscribe((tasks) => { this.tasks = tasks });
  }
}
