import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelThreeComponent } from './panel-three.component';

describe('PanelThreeComponent', () => {
  let component: PanelThreeComponent;
  let fixture: ComponentFixture<PanelThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
