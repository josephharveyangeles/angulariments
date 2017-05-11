import { ColorChooserPage } from './app.po';

describe('color-chooser App', () => {
  let page: ColorChooserPage;

  beforeEach(() => {
    page = new ColorChooserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
