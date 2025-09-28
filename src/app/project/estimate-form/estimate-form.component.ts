import { Component, EventEmitter,CUSTOM_ELEMENTS_SCHEMA, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project } from '../../models/project.model';
import { EstimationResult } from '../../models/estimationResult.model';

@Component({
  selector: 'app-estimate-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './estimate-form.component.html',
  styleUrls: ['./estimate-form.component.css']
})
export class EstimateFormComponent {
  @Input() project: Project;
  @Output() estimateRequested = new EventEmitter<Project>();

  estimationResult: EstimationResult;
  isLoading = false;
  error: string;

  getProjectCategories(): string[] {
    return [
      'SOFTWARE_DEVELOPMENT',
      'MARKETING',
      'EDUCATION',
      'RESEARCH',
      'FINANCE',
      'DESIGN',
      'HEALTHCARE',
      'CONSTRUCTION',
      'OTHER'
    ];
  }


  requestEstimate() {
    this.isLoading = true;
    this.error = null;
    this.estimateRequested.emit(this.project);
  }

}
