import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 🔧 Import du FormsModule
import { HttpClient } from '@angular/common/http'; // OK sans HttpClientModule

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
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

constructor(private http: HttpClient) {}

  onSubmit() {
    const url = 'https://formspree.io/f/xpwrpqld';
    this.http.post(url, this.form, {
      headers: { Accept: 'application/json' }
    }).subscribe({
      next: () => {
        alert('Merci pour votre message, je vous répondrai sous 24h !');
        this.form = { nom: '', adresse: '', telephone: '', sujet: '', message: '' };
      },
      error: (err) => {
        alert('Erreur : veuillez réessayer.');
        console.error(err);
      },
    });
  }

}

  