class HomePage {
  elements = {
    SignInButton: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find(".user-info a")
        .contains("Sign in"),

    SignUpButton: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find(".user-info a")
        .contains("Sign out"),
    SearchField: () =>
      cy.getIframeBody("iframe#framelive").find(".ui-autocomplete-input"),
  };

  clickSignInButton() {
    this.elements.SignInButton().click();
  }

  clickSignUpButton() {
    this.elements.SignUpButton().click();
  }

  validationSignUpButton() {
    this.elements.SignUpButton();
  }

  typeSearchField() {
    this.elements.SearchField().type("HUMMINGBIRD PRINTED T-SHIRT{enter}");
  }
}

module.exports = new HomePage();
