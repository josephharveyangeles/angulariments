import { Component, Input } from '@angular/core';
import { NameEntry } from './name-entry';

@Component({
  selector: '[app-child-tr]',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('app-child-tr')
  name: NameEntry;

}
