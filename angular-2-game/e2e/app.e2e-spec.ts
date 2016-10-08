import { Angular2GamePage } from './app.po';

describe('angular-2-game App', function() {
  let page: Angular2GamePage;

  beforeEach(() => {
    page = new Angular2GamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
