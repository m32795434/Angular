import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
// import { TASKS } from '../mock-tasks';
import { TaskIterface } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  private config = { headers: { 'Content-Type': 'application/json' } };
  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<TaskIterface[]> {
    return this.http.get<TaskIterface[]>(this.apiUrl);
  }
  deleteTask(task: TaskIterface): Observable<TaskIterface> {
    return this.http.delete<TaskIterface>(`${this.apiUrl}/${task.id}`)
  }

  updateTaskReminder(task: TaskIterface): Observable<TaskIterface> {
    return this.http.put<TaskIterface>(`${this.apiUrl}/${task.id}`, task, this.config)
  }
  //traditional fetch work ok-->
  // async ngOnInit(): Promise<any> {
  //   const response = await fetch(this.apiUrl, { method: 'GET', headers: { Accept: 'application/json' } });
  //   const result = await response.json();
  //   console.log(result)
  // }
}
