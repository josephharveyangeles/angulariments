import { TestBed, inject } from '@angular/core/testing';

import { ThemeChooserService } from './theme-chooser.service';

describe('ThemeChooserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeChooserService]
    });
  });

  it('should be created', inject([ThemeChooserService], (service: ThemeChooserService) => {
    expect(service).toBeTruthy();
  }));
});
