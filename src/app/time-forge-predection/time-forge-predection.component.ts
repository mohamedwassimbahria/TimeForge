import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-time-forge-predection',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './time-forge-predection.component.html',
  standalone: true,
  styleUrl: './time-forge-predection.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimeForgePredectionComponent {


  form: FormGroup;
  prediction: string | null = null;
  errorMessage: string | null = null;
  showAnimation = true; // Ajout d'une variable pour contrôler l'animation de chargement

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // Création du formulaire avec validation
    this.form = this.fb.group({
      steps: ['', Validators.required]
    });
  }

  predict() {
    if (this.form.invalid) {
      this.errorMessage = "Les champs 'steps' sont requis.";
      this.prediction = null;
      return;
    }

    // Récupération des valeurs du formulaire
    const { steps } = this.form.value;

    this.prediction = null;
    this.errorMessage = null;
    this.showAnimation = true; // Affichage de l'animation de chargement

    const body = { steps };

    this.http.post<any>('http://localhost:8600/predict', body).subscribe({
      next: (response) => {
        this.prediction = response.prediction;
        this.showAnimation = true; // Masquage de l'animation
      },
      error: (error) => {
        console.error('Erreur :', error);
        this.errorMessage = 'Erreur lors de la prédiction. Veuillez réessayer.';
        this.showAnimation = true; // Masquage de l'animation
      }
    });
  }

}
