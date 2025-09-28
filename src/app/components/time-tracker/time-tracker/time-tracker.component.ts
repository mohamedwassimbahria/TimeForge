// src/app/components/time-tracker/time-tracker.component.ts
import { Component, OnInit } from '@angular/core';
import {TimeLogService} from '../../../services/time-log.service';
import {AuthService} from '../../../auth.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserService} from '../../../user/user.service';
import {Router} from '@angular/router';

 // Assuming you have an auth service

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  imports: [
    DatePipe,
    NgForOf,
    FormsModule,
    NgIf
  ],
  styleUrls: ['./time-tracker.component.css']
})
export class TimeTrackerComponent implements OnInit {
  currentActivity = '';
  currentProjectId = '';
  isTimerRunning = false;
  timeLogs: any[] = [];
  id: string;
  currentUser: any = null;
  constructor(
    private timeLogService: TimeLogService,
    private authService: AuthService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.loadUserId();
    console.log('id:', this.id);
    if (this.id) {
      this.loadUserTimeLogs();
    }
    this.loadUserTimeLogs();
  }
  startTimer(): void {
    if (!this.currentActivity) {
      alert('Please enter an activity description');
      return;
    }
    this.timeLogService.startTimer(this.id, this.currentActivity, this.currentProjectId)
    .subscribe({
      next: (log) => {
        this.isTimerRunning = true;
        console.log('Timer started', log);
      },
      error: (err) => {
        console.error('Error starting timer', err);
        alert('Error starting timer: ' + err.message);
      }
    });
  }
  stopTimer(): void {
    this.timeLogService.stopTimer(this.id)
    .subscribe({
      next: (log) => {
        this.isTimerRunning = false;
        console.log('Timer stopped', log);
        this.loadUserTimeLogs();
      },
      error: (err) => {
        console.error('Error stopping timer', err);
        alert('Error stopping timer: ' + err.message);
      }
    });
  }
  loadUserTimeLogs(): void {
    this.timeLogService.getUserTimeLogs(this.id)
    .subscribe({
      next: (logs) => {
        this.timeLogs = logs;
      },
      error: (err) => {
        console.error('Error loading time logs', err);
      }
    });
  }
  getTimeLogsBetweenDates(start: Date, end: Date): void {
    this.timeLogService.getUserTimeLogsBetweenDates(this.id, start, end)
    .subscribe({
      next: (logs) => {
        this.timeLogs = logs;
      },
      error: (err) => {
        console.error('Error loading time logs', err);
      }
    });
  }
  private loadUserId() {
    try {
      this.currentUser = this.authService.getCurrentUser();
      this.id = this.authService.getCurrentUserId();
    } catch (error) {
      console.warn('User not authenticated, redirecting...');
      this.router.navigate(['/login']);
    }
  }
}
