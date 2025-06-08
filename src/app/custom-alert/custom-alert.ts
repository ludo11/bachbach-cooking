import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- nécessaire pour *ngIf

@Component({
  selector: 'custom-alert',
  imports: [CommonModule],
  templateUrl: './custom-alert.html',
  standalone: true,
  styleUrls: ['./custom-alert.css'],
})
export class CustomAlert  {
 @Input() title: string = '';
  @Input() message: string = '';
  @Input() closeHandler: () => void = () => {};
 @Input() visible: boolean = false;

  close() {
    this.closeHandler();
  }
}