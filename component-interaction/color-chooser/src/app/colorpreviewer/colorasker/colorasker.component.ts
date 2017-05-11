import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colorasker',
  templateUrl: './colorasker.component.html',
  styleUrls: ['./colorasker.component.css']
})
export class AskerComponent {

  @Output()
  onColorInputted = new EventEmitter<string>();

  buttonClicked(color:string) {
    this.onColorInputted.emit(color);
  }

}
