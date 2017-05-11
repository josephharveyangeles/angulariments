import { Component } from '@angular/core';
import { ThemeChooserService } from './theme-chooser.service';

@Component({
  selector: 'app-theme-chooser',
  templateUrl: './theme-chooser.component.html',
  styleUrls: ['./theme-chooser.component.css']
})
export class ThemeChooserComponent {

  private inputColor: string;

  constructor(private themeChooserService: ThemeChooserService) { }

  buttonClicked() {
      this.themeChooserService.changeColor(this.inputColor);
      this.inputColor = '';
  }

}
