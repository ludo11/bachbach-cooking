import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
appName = APP_CONSTANTS.APP_NAME;
menuOpen = false;



toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
}
