import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    console.log('toggling!');
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
