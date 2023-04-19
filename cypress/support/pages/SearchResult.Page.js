class SearchResult {
  elements = {
    ProductImg: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('img[alt="Hummingbird printed t-shirt"]'),
    AddToCardButton: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('button[data-button-action="add-to-cart"]'),
    CheckOutButton: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find(".btn.btn-primary")
        .contains("Proceed to checkout"),
  };

  imgValidate() {
    this.elements.ProductImg();
  }

  clickProductSelected() {
    this.elements.ProductImg().click();
  }

  clickAddToCardButton() {
    this.elements.AddToCardButton().click();
  }

  clickCheckOutButton() {
    this.elements.CheckOutButton().click();
  }
}

module.exports = new SearchResult();
