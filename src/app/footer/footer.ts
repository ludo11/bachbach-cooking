import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  appFooter = APP_CONSTANTS.FOOTER_TEXT;
}
