class CreateAccountPage {
  elements = {
    CreateAccountMsg: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('a[href="https://necessary-ink.demo.prestashop.com/en/login"]'),
    SocialTitleInput: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('label[for="field-id_gender-1"]'),
    FirstNameInput: () =>
      cy.getIframeBody("iframe#framelive").find("#field-firstname"),
    LastNameInput: () =>
      cy.getIframeBody("iframe#framelive").find("#field-lastname"),
    EmailInput: () => cy.getIframeBody("iframe#framelive").find("#field-email"),
    PasswordInput: () =>
      cy.getIframeBody("iframe#framelive").find("#field-password"),
    CustomerPrivacyInput: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('input[name="customer_privacy"]'),
    TerminosCodicionesInput: () =>
      cy.getIframeBody("iframe#framelive").find('input[name="psgdpr"]'),
    SaveButton: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('button[data-link-action="save-customer"]'),
  };

  createAccountValidationMsg() {
    this.elements.CreateAccountMsg();
  }
  clickSocialTitleInput() {
    this.elements.SocialTitleInput().click();
  }
  typeFirstNameInput(firstName) {
    this.elements.FirstNameInput().type(firstName);
  }
  typeLastNameInput(lastName) {
    this.elements.LastNameInput().type(lastName);
  }
  typeEmailInput(email) {
    this.elements.EmailInput().type(email);
  }
  typePasswordInput(password) {
    this.elements.PasswordInput().type(password);
  }
  clickCustomerPrivacy() {
    this.elements.CustomerPrivacyInput().click();
  }
  clickTerminosCondiciones() {
    this.elements.TerminosCodicionesInput().click();
  }
  clickSaveButton() {
    this.elements.SaveButton().click();
  }
}

module.exports = new CreateAccountPage();
