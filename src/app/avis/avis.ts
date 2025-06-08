import { Component } from '@angular/core';
import { EnCoursDeConstruction } from "../en-cours-de-construction/en-cours-de-construction";

@Component({
  selector: 'app-avis',
  imports: [EnCoursDeConstruction],
  templateUrl: './avis.html',
  standalone: true,
  styleUrl: './avis.css'
})
export class Avis {

}
