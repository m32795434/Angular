import { Component, EventEmitter, Output } from '@angular/core';
import { TaskIterface } from 'src/app/task';

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
