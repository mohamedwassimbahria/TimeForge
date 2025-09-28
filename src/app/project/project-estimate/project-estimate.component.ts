import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../models/project.model';
import { EstimationResult } from '../../models/estimationResult.model';
import { ProjectService } from '../project.service';
import { EstimateFormComponent } from '../estimate-form/estimate-form.component';

@Component({
  selector: 'app-project-estimate',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    EstimateFormComponent
  ],
  templateUrl: './project-estimate.component.html',
  styleUrls: ['./project-estimate.component.css']
})
export class ProjectEstimateComponent implements OnInit {
  project: Project;
  estimationResult: EstimationResult;
  isLoading = false;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.loadProject(projectId);
    } else {
      this.project = {
        project_id: '',
        title: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        category: 'DESIGN'
      };
    }
  }

  loadProject(id: string): void {
    this.isLoading = true;
    this.projectService.getProjectById(id).subscribe({
      next: (project) => {
        this.project = project;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load project';
        this.isLoading = false;
      }
    });
  }

  onEstimateRequested(project: Project): void {
    this.isLoading = true;
    this.error = null;

    const estimation$ = this.project.project_id
      ? this.projectService.estimateExistingProject(this.project.project_id)
      : this.projectService.estimateProject(project);

    estimation$.subscribe({
      next: (result) => {
        this.estimationResult = result;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to get estimation';
        this.isLoading = false;
      }
    });
  }

  getTimelineCompletion(): number {
    if (!this.project?.startDate || !this.project?.endDate) return 0;

    const totalDays = this.getWorkingDays();
    const daysPassed = this.getDaysPassed();
    return Math.min(100, Math.round((daysPassed / totalDays) * 100));
  }

  getWorkingDays(): number {
    const start = new Date(this.project.startDate);
    const end = new Date(this.project.endDate);
    const diff = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  private getDaysPassed(): number {
    const start = new Date(this.project.startDate);
    const now = new Date();
    const diff = Math.abs(now.getTime() - start.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
}
