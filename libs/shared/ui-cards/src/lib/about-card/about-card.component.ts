import { Component, Input } from '@angular/core';
import { TextTools } from '@spmka/shared/util-text';

@Component({
  selector: 'spmka-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {
  @Input() public aboutText: string;
  public copyRight: string;

  public constructor() {
    this.copyRight = TextTools.uppercase('© T-Systems Karlsruhe');
  }
}
