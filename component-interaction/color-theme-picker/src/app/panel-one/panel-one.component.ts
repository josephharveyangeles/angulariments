import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ThemeChooserService } from '../theme-chooser/theme-chooser.service';

@Component({
  selector: 'app-panel-one',
  templateUrl: './panel-one.component.html',
  styleUrls: ['./panel-one.component.css']
})
export class PanelOneComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  chosenColor = '';

  constructor(private themeChooserService: ThemeChooserService) { }

  ngOnInit() {
      this.subscription = this.themeChooserService.colorUpdate$.subscribe(color => this.chosenColor = color);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
