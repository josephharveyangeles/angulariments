import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPreviewerComponent } from './colorpreviewer.component';

describe('ColoraskerComponent', () => {
  let component: ColorPreviewerComponent;
  let fixture: ComponentFixture<ColorPreviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPreviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
