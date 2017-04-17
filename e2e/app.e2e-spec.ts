import { FirebaseFullAppPage } from './app.po';

describe('firebase-full-app App', function() {
  let page: FirebaseFullAppPage;

  beforeEach(() => {
    page = new FirebaseFullAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
