import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'spmka-about-button',
  templateUrl: './about-button.component.html',
  styleUrls: ['./about-button.component.scss']
})
export class AboutButtonComponent {
  @Output() public clicked: EventEmitter<void> = new EventEmitter();
}
