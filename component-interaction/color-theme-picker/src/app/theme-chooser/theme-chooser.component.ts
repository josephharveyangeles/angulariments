import { Component, OnInit } from '@angular/core';
import { ThemeChooserService } from './theme-chooser.service';

@Component({
  selector: 'app-theme-chooser',
  templateUrl: './theme-chooser.component.html',
  styleUrls: ['./theme-chooser.component.css']
})
export class ThemeChooserComponent implements OnInit {

  private inputColor: string;

  constructor(private themeChooserService: ThemeChooserService) { }

  ngOnInit() {
  }

  buttonClicked() {
      this.themeChooserService.changeColor(this.inputColor);
      this.inputColor = '';
  }

}
