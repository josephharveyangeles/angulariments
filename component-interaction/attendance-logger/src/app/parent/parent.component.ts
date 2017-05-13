import { Component } from '@angular/core';
import { NameEntry } from './child/name-entry';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  private inputName = '';
  private nameList: NameEntry[];
  private currentDate = new Date();

  buttonClicked(): void {
    if (this.nameList === undefined || this.nameList.length === 0) {
      this.nameList = [];
      this.nameList.push({id: 1, name: this.inputName, time: new Date()});
      this.inputName = '';
      return;
    }
    this.nameList.push({id: this.nameList.length + 1, name: this.inputName, time: new Date()});
    this.inputName = '';
  }

}
