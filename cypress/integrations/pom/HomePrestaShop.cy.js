import faker from "faker";

import HomePage from "../../support/pages/HomePage";
import CreateAccountPage from "../../support/pages/CreateAccountPage";
import SignInPage from "../../support/pages/SignInPage";
import SearchResultPage from "../../support/pages/SearchResult.Page";
import { before, beforeEach, describe, it } from "mocha";
import ShoppingCardPage from "../../support/pages/ShoppingCardPage";
import PayPage from "../../support/pages/Pay.Page";

const firstName = "Carlos";
const lastName = "Andres";
const email = faker.internet.email();
const password = 123456;
const address = "Test";
const zipCode = 75001;
const city = "Armenia";

describe("Prueba Tecnica Rebus", () => {
  beforeEach(() => {
    cy.visit("https://demo.prestashop.com/#/en/front");
    cy.wait(10000);
  });

  it("Registro y Acceso de Usuario", () => {
    HomePage.clickSignInButton();
    cy.wait(2000);
    SignInPage.loginAccountValidationMsg();
    SignInPage.clickCreateAccountLink();
    cy.wait(2000);
    CreateAccountPage.clickSocialTitleInput();
    CreateAccountPage.typeFirstNameInput(firstName);
    CreateAccountPage.typeLastNameInput(lastName);
    CreateAccountPage.typeEmailInput(email);
    CreateAccountPage.typePasswordInput(password);
    CreateAccountPage.clickCustomerPrivacy();
    CreateAccountPage.clickTerminosCondiciones();
    CreateAccountPage.clickSaveButton();
    cy.wait(2000);
    HomePage.validationSignUpButton();
  });

  it("Búsqueda y selección de productos", () => {
    HomePage.clickSignInButton();
    HomePage.typeSearchField();
    cy.wait(2000);
    SearchResultPage.imgValidate();
  });
  it("Agregar productos al carrito y finalizar compra", () => {
    HomePage.clickSignInButton();
    cy.wait(1000);
    HomePage.typeSearchField();
    cy.wait(2000);
    SearchResultPage.imgValidate();
    cy.wait(2000);
    SearchResultPage.clickProductSelected();
    cy.wait(2000);
    SearchResultPage.clickAddToCardButton();
    cy.wait(2000);
    SearchResultPage.clickCheckOutButton();
    cy.wait(2000);
    ShoppingCardPage.clickProceedToCheckoutButton();
    cy.wait(3000);
    PayPage.validateTitleIndicator();
    CreateAccountPage.clickSocialTitleInput();
    CreateAccountPage.typeFirstNameInput(firstName);
    CreateAccountPage.typeLastNameInput(lastName);
    CreateAccountPage.typeEmailInput(email);
    CreateAccountPage.clickCustomerPrivacy();
    CreateAccountPage.clickTerminosCondiciones();
    PayPage.clickContinueButtonPersonalInformation();
    cy.wait(2000);
    PayPage.typeAddress(address);
    PayPage.typeZipCode(zipCode);
    PayPage.typeCity(city);
    PayPage.clickContinueAddressesButton();
    cy.wait(2000);
    PayPage.clickContinueShippingButton();
    cy.wait(2000);
    PayPage.clickPayByBank();
    PayPage.clickTermsService();
    cy.wait(2000);
    PayPage.clickPlaceOrderButton();
    PayPage.validationConfirmedMsg();
  });
});
