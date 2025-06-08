import { Component } from '@angular/core';
import { EnCoursDeConstruction } from '../en-cours-de-construction/en-cours-de-construction';

@Component({
  selector: 'app-prestations',
  standalone: true, 
  imports : [EnCoursDeConstruction],
  templateUrl: './prestations.html',
  styleUrl: './prestations.css'
})
export class Prestations {
  prestations = [
    {
      image: 'assets/images/prestation1.png',
      description: 'Filet de maquereau grillé avec légumes vapeur et sauce maison.',
      prix: '19,90 €'
    },
    {
      image: 'assets/images/prestation2.png',
      description: 'Assiette végétarienne équilibrée et savoureuse.',
      prix: '17,50 €'
    },
    {
      image: 'assets/images/prestation3.png',
      description: 'Pain maison garni et salade croquante.',
      prix: '15,00 €'
    }
  ];
}
