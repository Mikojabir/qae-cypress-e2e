class roomPage {

    Room() {
        const button = cy
          .get(
            "#__layout > div:nth-child(1) > div > div.mobile-main-menu > div > div > div > div:nth-child(2) > a"
          )
          .should("be.visible");
        button.click();
      }
    
      r_btn_DepOn() {
        const button = cy
          .get(
            "#__layout > div:nth-child(1) > div > div.main-content > div > div:nth-child(2) > div > div > div > div > div.col-auto > label > span"
          )
          .should("be.visible");
        button.click();
      }
    
      r_btn_SetDep() {
        const button = cy
          .get(
            "#__layout > div:nth-child(1) > div > div.main-content > div > div:nth-child(2) > div > div > div > div > div.col-9 > div > a > img"
          )
          .should("be.visible");
        button.click();
      }
    
      Transactions() {
        const button = cy.get(
          "#__layout > div:nth-child(1) > div > div.mobile-main-menu > div > div > div > div:nth-child(3) > a"
        );
        button.click();
      }
    
      Ticketing() {
        const button = cy.get(
          "#__layout > div:nth-child(1) > div > div.mobile-main-menu > div > div > div > div:nth-child(4) > a"
        );
        button.click();
      }

}

export default roomPage;