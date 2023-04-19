class PersonalInformation {
  elements = {
    TitleIndicator: () =>
      cy.getIframeBody("iframe#framelive").find(".step-number").contains("1"),
  };

  validateTitleIndicator() {
    this.elements.TitleIndicator();
  }
}

module.exports = new PersonalInformation();
