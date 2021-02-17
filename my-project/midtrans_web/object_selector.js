import config from "./config";

class homepage_nav {
  visit() {
    cy.visit(config.url);
  }

  //Internet Banking
  click_IB() {
    //click Menu  button
    cy.get(".dropdown-toggle").click();
    //clickBCA
    cy.get("#myNavbar > ul > li.dropdown.open > ul > li:nth-child(2) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(1) > .col-sm-10 > #inputMerchantId")
      .should("be.visible")
      .type("049");

    cy.get(":nth-child(2) > .col-sm-10 > #inputMerchantId")
      .should("be.visible")
      .type("Mikojabir");

    cy.get(".btn").should("be.visible").click();
  }

  //Virtual Account
  click_VA() {
    //click Menu  button
    cy.get(".dropdown-toggle").click();
    //VA BNI
    cy.get("#myNavbar > ul > li.dropdown.open > ul > li:nth-child(5) > a")
      .should("be.visible")
      .click();
    cy.get("#inputMerchantId").should("be.visible").type("109749292020214502");
    cy.get(".btn").click();
    cy.get(".alert").contains(config.bni_alert);

    //click Menu  button
    cy.get(".dropdown-toggle").click();
    //VA BRI
    cy.get("#myNavbar > ul > li.dropdown.open > ul > li:nth-child(6) > a")
      .should("be.visible")
      .click();
    cy.get("#inputMerchantId").should("be.visible").type("109749292020214502");
    cy.get(".btn").click();
    cy.get(".alert").contains(config.bri_alert);

    //click Menu  button
    cy.get(".dropdown-toggle").click();
    //VA Permata
    cy.get("#myNavbar > ul > li.dropdown.open > ul > li:nth-child(7) > a")
      .should("be.visible")
      .click();
    cy.get("#inputMerchantId").should("be.visible").type("109749292020214502");
    cy.get(".btn").click();
    cy.get(".alert").contains(config.permata_alert);

    //click Menu  button
    cy.get(".dropdown-toggle").click();
    //VA BCA
    cy.get("#myNavbar > ul > li.dropdown.open > ul > li:nth-child(8) > a")
      .should("be.visible")
      .click();
    cy.get("#inputMerchantId").should("be.visible").type("109749292020214502");
    cy.get(".btn").click();
    cy.get(".alert").contains(config.bca_alert);

    //click Menu  button
    cy.get(".dropdown-toggle").click();
    //VA Mandiri
    cy.get("#myNavbar > ul > li.dropdown.open > ul > li:nth-child(9) > a")
      .should("be.visible")
      .click();
    cy.get("#biller_code").should("be.visible").type("7002");
    cy.get("#payment_code").should("be.visible").type("292020214502");
    cy.get(".btn").click();
    cy.get(".alert").contains(config.mandiri_alert);
  }
}

export default homepage_nav;
