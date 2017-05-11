import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ThemeChooserService } from '../theme-chooser/theme-chooser.service';

@Component({
  selector: 'app-panel-three',
  templateUrl: './panel-three.component.html',
  styleUrls: ['./panel-three.component.css']
})
export class PanelThreeComponent implements OnInit, OnDestroy {

  colorSubscription: Subscription;

  chosenColor = '';

  constructor(private themeChooserService: ThemeChooserService) { }

  ngOnInit() {
      this.colorSubscription = this.themeChooserService.colorUpdate$.subscribe(color => this.chosenColor = color);
  }

 ngOnDestroy() {
     this.colorSubscription.unsubscribe();
 }

}
