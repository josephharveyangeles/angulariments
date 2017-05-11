import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ThemeChooserService {

  private _colorSource = new BehaviorSubject<string>(null);

  colorUpdate$ = this._colorSource.asObservable();

  changeColor(color: string) {
      this._colorSource.next(color);
  }

}
