import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AskerComponent } from './colorpreviewer/colorasker/colorasker.component';
import { ColorPreviewerComponent } from './colorpreviewer/colorpreviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AskerComponent,
    ColorPreviewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
