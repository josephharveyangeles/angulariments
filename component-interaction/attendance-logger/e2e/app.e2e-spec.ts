import { AttendanceMonitorPage } from './app.po';

describe('attendance-monitor App', () => {
  let page: AttendanceMonitorPage;

  beforeEach(() => {
    page = new AttendanceMonitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
