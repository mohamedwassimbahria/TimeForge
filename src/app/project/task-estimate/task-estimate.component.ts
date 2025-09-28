import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-estimate',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-estimate.component.html',
  styleUrl: './task-estimate.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TaskEstimateComponent {
  form: FormGroup;
  suggestedTasks: string[] = [];
  errorMessage: string | null = null;
  loading = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      description: ['', Validators.required]
    });
  }

  predictTasks() {
    if (this.form.invalid) {
      this.errorMessage = "Veuillez entrer une description de projet.";
      return;
    }

    const description = this.form.value.description;
    this.errorMessage = null;
    this.suggestedTasks = [];
    this.loading = true;

    const payload = { project_description: description }; // ✅ nom du champ attendu par Flask
    this.http.post<any>('http://localhost:5000/predict', payload).subscribe({
      next: (response) => {
        this.suggestedTasks = response.suggested_tasks || response.suggestedTasks || [];
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = "Erreur lors de la prédiction. Veuillez réessayer.";
        this.loading = false;
      }
    });
  }
}
