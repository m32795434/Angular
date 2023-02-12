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
  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<TaskIterface[]> {
    const obs = this.http.get<TaskIterface[]>(this.apiUrl);
    console.log('obs', obs);
    return obs;
  }
  deleteTask(task: TaskIterface): Observable<TaskIterface> {
    return this.http.delete<TaskIterface>(`${this.apiUrl}/${task.id}`)
  }
  //traditional fetch work ok-->
  // async ngOnInit(): Promise<any> {
  //   const response = await fetch(this.apiUrl, { method: 'GET', headers: { Accept: 'application/json' } });
  //   const result = await response.json();
  //   console.log(result)
  // }
}
