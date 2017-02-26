import { TextbookStuffPage } from './app.po';

describe('textbook-stuff App', function() {
  let page: TextbookStuffPage;

  beforeEach(() => {
    page = new TextbookStuffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
