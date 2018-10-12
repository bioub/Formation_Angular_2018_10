import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should add a new todo', () => {
    page.navigateTo();
    page.fillNewTodo('Pain');
    page.submitForm();
    expect(page.getTodo()).toContain('Pain');
  });
});
