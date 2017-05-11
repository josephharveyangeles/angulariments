import { ColorThemePickerPage } from './app.po';

describe('color-theme-picker App', () => {
  let page: ColorThemePickerPage;

  beforeEach(() => {
    page = new ColorThemePickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
