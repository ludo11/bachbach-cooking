import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  appName = APP_CONSTANTS.APP_NAME;
}
