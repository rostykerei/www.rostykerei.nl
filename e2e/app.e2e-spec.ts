import { AppPage } from './app.po';

describe('www.rostykerei.nl landing page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Rosty Kerei');
  });
});
