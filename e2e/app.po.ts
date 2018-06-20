import { browser, by, element } from 'protractor';

export class WeatherFrontPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wf-root h1')).getText();
  }
}
