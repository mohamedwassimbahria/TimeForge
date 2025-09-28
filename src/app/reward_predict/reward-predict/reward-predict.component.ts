import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-reward-predict',
  templateUrl: './reward-predict.component.html',
  styleUrls: ['./reward-predict.component.css'],
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RewardPredictComponent {
  form: FormGroup;
  prediction: string | null = null;
  errorMessage: string | null = null;
  showAnimation = false;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });
  }

  predict() {
    if (this.form.invalid) {
      this.errorMessage = "Les champs 'start_date' et 'end_date' sont requis.";
      this.prediction = null;
      return;
    }

    const { start_date, end_date } = this.form.value;
    this.prediction = null;
    this.errorMessage = null;
    this.showAnimation = true;

    const body = { start_date, end_date };

    this.http.post<any>('http://localhost:8201/predict', body).subscribe({
      next: (response) => {
        this.prediction = response.reward;
        this.showAnimation = false;
      },
      error: (error) => {
        console.error('Erreur:', error);
        this.errorMessage = 'Erreur lors de la prédiction. Veuillez réessayer.';
        this.showAnimation = false;
      }
    });
  }
}
