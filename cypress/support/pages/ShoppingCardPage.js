class ShoppingCarPage {
  elements = {
    ProceedToCheckoutButton: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find(".btn.btn-primary")
        .contains("Proceed to checkout"),
  };

  clickProceedToCheckoutButton() {
    this.elements.ProceedToCheckoutButton().click();
  }
}

module.exports = new ShoppingCarPage();
