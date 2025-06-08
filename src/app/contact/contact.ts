import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 🔧 Import du FormsModule
import { HttpClient } from '@angular/common/http'; // OK sans HttpClientModule
import { CustomAlert } from '../custom-alert/custom-alert';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CustomAlert, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true, 
})
export class Contact {
form = {
    nom: '',
    adresse: '',
    telephone: '',
    sujet: '',
    message: ''
  };
  alertVisible = false;
  alertTitle = '';
  alertMessage = '';

constructor(private http: HttpClient) {}

  onSubmit() {
    const url = 'https://formspree.io/f/xpwrpqld';
    this.http.post(url, this.form, {
      headers: { Accept: 'application/json' }
    }).subscribe({
      next: () => {
        this.alertTitle = 'Merci !';
        this.alertMessage = 'Votre message a bien été envoyé. Je vous répondrai sous 24h !';
        this.alertVisible = true;
        this.form = { nom: '', adresse: '', telephone: '', sujet: '', message: '' };
      },
      error: () => {
        this.alertTitle = 'Erreur';
        this.alertMessage = 'Une erreur est survenue. Veuillez réessayer.';
        this.alertVisible = true;
      }
    });
  }
closeAlert() {
  this.alertVisible = false;
}
}

  