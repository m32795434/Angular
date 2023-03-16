import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask = false;
  private subject = new Subject<boolean>();// another way BehaviorSubject<any>(null)
  //onToggle() returns the same value, so, I can subscribe to "boolean1" or "the return of onToggle()" everywhere. 
  //Furthermore, we can subscribe permanently with a subscriber!
  boolean1: Observable<boolean>;
  boolean2 = false;
  constructor() {
    this.boolean1 = this.subject.asObservable();
  }
  anoherMethod() {
    //here I could subscribe to the variable(observer) too:
    this.boolean1.subscribe((data) => this.boolean2 = data);
  }

  toggleAddTask(): void {
    console.log('toggling!');
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
