import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
    return this.http.put<TaskIterface>(`${this.apiUrl}/${task.id}`, task, this.config);
  }
  createTask(task: TaskIterface): Observable<TaskIterface> {
    return this.http.post<TaskIterface>(`${this.apiUrl}/`, task, this.config);
  }


  //traditional fetch work ok-->
  //put
  //await fetch(`${this.apiUrl}/${task.id}`, { method: "PUT", body: JSON.stringify(task), headers: { "Content-Type": "application/json" } })
  //get
  // async ngOnInit(): Promise<any> {
  //   const response = await fetch(this.apiUrl, { method: 'GET', headers: { Accept: 'application/json' } });
  //   const result = await response.json();
  //   console.log(result)
  // }
}
