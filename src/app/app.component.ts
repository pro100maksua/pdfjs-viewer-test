import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ng2-pdfjs-viewer [pdfSrc]="pdfSrc"></ng2-pdfjs-viewer>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pdfSrc = '../assets/sample.pdf';
}
