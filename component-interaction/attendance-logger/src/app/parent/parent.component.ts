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

  buttonClicked(): void {
    if (this.nameList === undefined || this.nameList.length === 0) {
      this.nameList.push({id: 1, name: this.inputName, time: 'time-now'});
      return;
    }
    this.nameList.push({id: this.nameList.length, name: this.inputName, time: 'time-now'});
  }

}
