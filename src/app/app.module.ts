import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PdfJsViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
