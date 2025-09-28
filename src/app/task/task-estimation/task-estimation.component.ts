import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskEstimation } from '../../models/taskEstimation.model';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-estimation',
  imports: [CommonModule],
  templateUrl: './task-estimation.component.html',
  styleUrl: './task-estimation.component.css'
})
export class TaskEstimationComponent {
  @Input() task!: Task;
  estimation?: TaskEstimation;
  isLoading = false;
  error?: string;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    if (this.task._id) {
      this.loadEstimation();
    }
  }

  loadEstimation() {
    this.isLoading = true;
    this.taskService.estimateExistingTask(this.task._id!).subscribe({
      next: (est) => {
        this.estimation = est;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load estimation';
        this.isLoading = false;
      }
    });
  }

}
