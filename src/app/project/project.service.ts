import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Task } from '../models/task.model';
import { EstimationResult } from '../models/estimationResult.model';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:8400/timeforge/projects';
 
   constructor(private http: HttpClient) {}
 
 
   getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }


  getProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    const { project_id, ...body } = project;
    return this.http.post<Project>(`${this.apiUrl}/create`, body);
  }
  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/update`, project);
  }
  
  
  deleteProject(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTasksByProject(id: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/${id}/tasks`);
  }

  getTasksByProjectBoard(projectId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/${projectId}/board/tasks`);
  }




  estimateProject(project: Project): Observable<EstimationResult> {
    const request = {
      description: project.description,
      startDate: project.startDate,
      endDate: project.endDate,
      category: project.category
    };
    return this.http.post<EstimationResult>(`${this.apiUrl}/estimate`, request);
  }
  
  estimateExistingProject(id: string): Observable<EstimationResult> {
    return this.http.get<EstimationResult>(`${this.apiUrl}/${id}/estimate`);
  }

  getProjectsNotInBoard(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/getProjectsNotInBoard`);
  }
  getProjectDashboardStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard-stats`);
  }
}
