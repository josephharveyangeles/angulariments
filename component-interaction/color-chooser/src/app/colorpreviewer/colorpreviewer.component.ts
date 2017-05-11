import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colorpreviewer',
  templateUrl: './colorpreviewer.component.html',
  styleUrls: ['./colorpreviewer.component.css']
})
export class ColorPreviewerComponent {

  @Input()
  color:string;

  resetValue:string = null;

  changeColor(color:string) {
    console.log(color);
    this.color = color;
  }

  reset() {
    this.changeColor("gray")
    this.resetValue = '';
  }

}
