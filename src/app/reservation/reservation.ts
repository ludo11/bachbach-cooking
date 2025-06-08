import { Component } from '@angular/core';
import { EnCoursDeConstruction } from '../en-cours-de-construction/en-cours-de-construction';

@Component({
  selector: 'app-reservation',
  imports: [EnCoursDeConstruction],
  standalone : true,
  templateUrl: './reservation.html',
  styleUrl: './reservation.css'
})
export class Reservation {

}
