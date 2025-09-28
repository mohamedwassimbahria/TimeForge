import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task.model';
import { TaskEstimation } from '../models/taskEstimation.model';
import { Project } from '../models/project.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private apiUrl = 'http://localhost:8400/timeforge/tasks';
 
   constructor(private http: HttpClient) {}
   private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 
getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`); // Change /getAllTasks en /tasks
  }
  
  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`); // Change /getTaskById/${id} en /${id}
  }

 
   createTask(task: Task): Observable<Task> {
     return this.http.post<Task>(`${this.apiUrl}/create`, task);
   }
 
   updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/update/${task._id}`, task);
  }
 
   deleteTask(id: string | undefined): Observable<void> {
     return this.http.delete<void>(`${this.apiUrl}/${id}`);
   }
   getTasksByColumnId(columnId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/column/${columnId}`);
  }
  getTasksByProject(projectId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/projects/${projectId}`);
  }
 
  estimateTask(task: Task): Observable<TaskEstimation> {
    const request = {
      priority: task.priority,
      dueDate: task.dueDate
    };
    return this.http.post<TaskEstimation>(`${this.apiUrl}/estimate`, request);
  }

  estimateExistingTask(id: string): Observable<TaskEstimation> {
    return this.http.get<TaskEstimation>(`${this.apiUrl}/${id}/estimate`);
  }

}
