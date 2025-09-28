import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskEstimationComponent } from "../task-estimation/task-estimation.component";
import {  Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  imports: [CommonModule, TaskEstimationComponent],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {

  data: Task
  constructor(
    private router: Router
  ) {
    const navigation = history.state;
    if (navigation && navigation.data) {
      this.data = navigation.data;
    } else {
      this.router.navigate(['/tasks']);

    }
  }

  close(): void {
    this.router.navigate(['/tasks']);
  }

}
