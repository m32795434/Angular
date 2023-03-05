import { Component, EventEmitter, Output } from '@angular/core';
import { TaskIterface } from 'src/app/task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<TaskIterface> = new EventEmitter();
  text = '';
  day = '';
  reminder = false;
  showAddTask = false;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((val) => {
      this.showAddTask = val;
    })
  }

  onSubmit() {
    console.log('submited')
    if (!this.text) {
      alert('Please add a task!')
      return
    }
    const newTask = { text: this.text, day: this.day, reminder: this.reminder };
    this.onAddTask.emit(newTask);
  }
}
