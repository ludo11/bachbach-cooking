import { Component, ElementRef, HostListener } from '@angular/core';
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


constructor(private eRef: ElementRef) {}
toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

closeMenu() {
  // Ne ferme que si on est sur mobile
  if (window.innerWidth <= 768) {
    this.menuOpen = false;
  }
}

 @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.eRef.nativeElement.contains(event.target);
    if (!clickedInside && this.menuOpen && window.innerWidth <= 768) {
      this.menuOpen = false;
    }
  }
}
