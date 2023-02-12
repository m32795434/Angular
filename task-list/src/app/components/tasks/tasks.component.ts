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

  updateTasks() {
    this.taskSrv.getTasks().subscribe((tasks) => { this.tasks = tasks; })
  }
  ngOnInit(): void {
    this.updateTasks();
  }
  delete(task: TaskIterface) {
    this.taskSrv.deleteTask(task).subscribe(() => {
      console.log('item deleted');
      this.updateTasks();
    });
  }
  toggleReminder(task: TaskIterface) {
    task.reminder = !task.reminder;
  }
}
