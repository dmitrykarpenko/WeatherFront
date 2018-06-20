import { WeatherFrontPage } from './app.po';

describe('wf App', () => {
  let page: WeatherFrontPage;

  beforeEach(() => {
    page = new WeatherFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Weather Front!!');
  });
});
