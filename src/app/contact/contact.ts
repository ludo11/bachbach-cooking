import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 🔧 Import du FormsModule

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

  onSubmit() {
    console.log('Formulaire envoyé :', this.form);
    alert('Merci pour votre message, je vous répondrai sous 24h !');
    this.form = {
      nom: '',
      adresse: '',
      telephone: '',
      sujet: '',
      message: ''
    };
  }

}

  