import { Component, Input } from '@angular/core';

@Component({
  selector: 'spmka-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {
  @Input() public aboutText: string;
}
