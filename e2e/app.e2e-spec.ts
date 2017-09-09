import { InnqubeWebsitePage } from './app.po';

describe('innqube-website App', () => {
  let page: InnqubeWebsitePage;

  beforeEach(() => {
    page = new InnqubeWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
