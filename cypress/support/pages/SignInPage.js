class SignInPage {
  elements = {
    LoginAccountMsg: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find("header.page-header h1")
        .contains("Log in to your account"),
    CreateAccountLink: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('a[data-link-action="display-register-form"]'),
  };
  loginAccountValidationMsg() {
    this.elements.LoginAccountMsg();
  }
  clickCreateAccountLink() {
    this.elements.CreateAccountLink().click();
  }
}

module.exports = new SignInPage();
