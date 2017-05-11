import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ThemeChooserService } from '../theme-chooser/theme-chooser.service';

@Component({
  selector: 'app-panel-two',
  templateUrl: './panel-two.component.html',
  styleUrls: ['./panel-two.component.css']
})
export class PanelTwoComponent implements OnInit, OnDestroy {

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
