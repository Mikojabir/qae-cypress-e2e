class home {

 Home() {
    const button = cy.get(
      "#__layout > div:nth-child(1) > div > div.mobile-main-menu > div > div > div > div:nth-child(1) > a"
    );
    button.click();
  }

  btn_switch() {
    cy.get(
      "#__layout > div:nth-child(1) > div > div.main-content > div > div.mobile-header-home.lh-1--2 > div > div > div.col-auto"
    );
    button.click();
  }

  btn_Withdraw_on() {
    const button = cy
      .get(
        "#__layout > div:nth-child(1) > div > div.main-content > div > div.content-loader.position-relative > div > div.content-wrapper.py-3 > div > div.balance-wrapper.p-2.mt-3 > div > div.col-5 > div > a > button"
      )
      .should("be.enabled");
    button.click();
  }

  btn_Withdraw_off() {
    const button = cy.get(
        "#__layout > div:nth-child(1) > div > div.main-content > div > div.content-loader.position-relative > div > div.content-wrapper.py-3 > div > div.balance-wrapper.p-2.mt-3 > div > div.col-5 > div > a > button"
      )
      .should("be.disabled");
  }

  btn_TodTrx() {
    cy.get(
      "#__layout > div:nth-child(1) > div > div.main-content > div > div.content-loader.position-relative > div > div.content-wrapper.py-3 > div > div.summary-wrapper.mt-3 > ul > li:nth-child(2) > div > div > div.col-5 > div > a"
    )
      .should("be.visible")
      .click();
    cy.wait(3000);
    cy.get(
      "#__layout > div:nth-child(1) > div > div.mobile-main-menu > div > div > div > div:nth-child(1) > div > a > div"
    )
      .should("be.visible")
      .click();
  }

  btn_Occupied() {
    cy.get(
      "#__layout > div:nth-child(1) > div > div.main-content > div > div.content-loader.position-relative > div > div.content-wrapper.py-3 > div > div:nth-child(4) > ul > li:nth-child(3) > div > div.mt-2 > div:nth-child(1) > div.col-5 > div > a"
    )
      .should("be.visible")
      .click();
    cy.wait(3000);
    cy.get(
      "#__layout > div:nth-child(1) > div > div.mobile-main-menu > div > div > div > div:nth-child(1) > div > a > div"
    )
      .should("be.visible")
      .click();
  }

  btn_Vacant() {
    cy.get(
        "div.row:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a"
      )
      .should("be.visible")
      .click();
      cy.wait(3000);
    cy.get(
      "#__layout > div:nth-child(1) > div > div.mobile-main-menu > div > div > div > div:nth-child(1) > div > a > div"
    )
      .should("be.visible")
      .click();
  }

  btn_Closed() {
    cy.get(
        "div.row:nth-child(3) > div:nth-child(2) > div:nth-child(1) > a"
      )
      .should("be.visible")
      .click();
      cy.wait(3000);
    cy.get(
      "#__layout > div:nth-child(1) > div > div.mobile-main-menu > div > div > div > div:nth-child(1) > div > a > div"
    )
      .should("be.visible")
      .click();
  }

  btn_PayDue() {
    cy.get(
        "div.summary-wrapper:nth-child(4) > ul:nth-child(1) > li:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a"
      )
      .should("be.visible")
      .click();
      cy.wait(3000);
    cy.get(
      "#__layout > div:nth-child(1) > div > div.mobile-main-menu > div > div > div > div:nth-child(1) > div > a > div"
    )
      .should("be.visible")
      .click();
  }

  btn_Chat() {
    cy.get('a.disable-select:nth-child(1)')
    .should('be.visible')
    .click({multiple:true});
  }
}

export default home;

