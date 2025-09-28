// src/app/services/time-log.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeLog } from '../models/time-log.model';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TimeLogService {
  private apiUrl = `${environment.apiUrl}/timeforge/api/time-logs`;

  constructor(private http: HttpClient) { }

  startTimer(userId: string, activityDescription: string, projectId?: string): Observable<TimeLog> {
    let params = new HttpParams()
    .set('id', userId)
    .set('activityDescription', activityDescription);

    if (projectId) {
      params = params.set('projectId', projectId);
    }

    return this.http.post<TimeLog>(`${this.apiUrl}/start`, {}, { params });
  }

  stopTimer(userId: string): Observable<TimeLog> {
    const params = new HttpParams()
    .set('id', userId);

    return this.http.post<TimeLog>(`${this.apiUrl}/stop`, {}, { params });
  }

  getUserTimeLogs(id: string): Observable<TimeLog[]> {
    return this.http.get<TimeLog[]>(`${this.apiUrl}/user/${id}`);
  }

  getUserTimeLogsBetweenDates(userId: string, start: Date, end: Date): Observable<TimeLog[]> {
    const params = new HttpParams()
    .set('start', start.toISOString())
    .set('end', end.toISOString());

    return this.http.get<TimeLog[]>(`${this.apiUrl}/user/${userId}/between`, { params });
  }
}
