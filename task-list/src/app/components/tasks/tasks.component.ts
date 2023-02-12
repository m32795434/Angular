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
    const subs = this.taskSrv.getTasks().subscribe((tasks) => { this.tasks = tasks; });
    console.log('subs', subs);
  }
  delete(task: TaskIterface) {
    this.taskSrv.deleteTask(task).subscribe(() => {
      console.log('item deleted');
      this.taskSrv.getTasks().subscribe((tasks) => {
        this.tasks = tasks;
      })
    });

  }
}
