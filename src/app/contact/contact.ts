import { Component } from '@angular/core';
import { EnCoursDeConstruction } from '../en-cours-de-construction/en-cours-de-construction';

@Component({
  selector: 'app-contact',
  imports: [EnCoursDeConstruction],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true, 
})
export class Contact {

}
