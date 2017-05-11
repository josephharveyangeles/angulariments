import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ThemeChooserComponent } from './theme-chooser/theme-chooser.component';
import { PanelOneComponent } from './panel-one/panel-one.component';
import { PanelTwoComponent } from './panel-two/panel-two.component';
import { PanelThreeComponent } from './panel-three/panel-three.component';

import { ThemeChooserService } from './theme-chooser/theme-chooser.service';

@NgModule({
  declarations: [
    AppComponent,
    ThemeChooserComponent,
    PanelOneComponent,
    PanelTwoComponent,
    PanelThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ThemeChooserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
