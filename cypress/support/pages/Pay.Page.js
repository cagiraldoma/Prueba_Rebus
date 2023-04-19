class Pay {
  elements = {
    TitleIndicator: () =>
      cy.getIframeBody("iframe#framelive").find(".step-number").contains("1"),
    ContinueButtonPersonalInformation: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('button[data-link-action="register-new-customer"]'),
    AddressCard: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find("#id-address-delivery-address-8"),
    AddressInput: () =>
      cy.getIframeBody("iframe#framelive").find("#field-address1"),
    ZipInput: () =>
      cy.getIframeBody("iframe#framelive").find("#field-postcode"),
    CityInput: () => cy.getIframeBody("iframe#framelive").find("#field-city"),
    ContinueAddressesButton: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('button[name="confirm-addresses"]'),
    ShippingRadioButton: () =>
      cy.getIframeBody("iframe#framelive").find("#delivery_option_1"),
    ContinueShippingButton: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('button[name="confirmDeliveryOption"]'),
    PayByBankWireRadioButton: () =>
      cy.getIframeBody("iframe#framelive").find("#payment-option-2"),
    TermsServiceCheckBox: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find('input[id="conditions_to_approve[terms-and-conditions]"]'),
    PlaceOrderButton: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find(".btn.btn-primary.center-block"),
    TitleConfirmedMsg: () =>
      cy
        .getIframeBody("iframe#framelive")
        .find(".material-icons.rtl-no-flip.done"),
  };

  validateTitleIndicator() {
    this.elements.TitleIndicator();
  }

  clickContinueButtonPersonalInformation() {
    this.elements.ContinueButtonPersonalInformation().click();
  }

  validateAddressCard() {
    this.elements.AddressCard();
  }

  typeAddress(address) {
    this.elements.AddressInput().type(address);
  }

  typeZipCode(zipCode) {
    this.elements.ZipInput().type(zipCode);
  }

  typeCity(city) {
    this.elements.CityInput().type(city);
  }

  clickContinueAddressesButton() {
    this.elements.ContinueAddressesButton().click();
  }

  clickRadioButtonShipping() {
    this.elements.ShippingRadioButton().click;
  }

  clickContinueShippingButton() {
    this.elements.ContinueShippingButton().click();
  }

  clickPayByBank() {
    this.elements.PayByBankWireRadioButton().click();
  }

  clickTermsService() {
    this.elements.TermsServiceCheckBox().click();
  }

  clickPlaceOrderButton() {
    this.elements.PlaceOrderButton().click();
  }

  validationConfirmedMsg() {
    this.elements.TitleConfirmedMsg();
  }
}

module.exports = new Pay();
