import { Angular060417Page } from './app.po';

describe('angular060417 App', () => {
  let page: Angular060417Page;

  beforeEach(() => {
    page = new Angular060417Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
