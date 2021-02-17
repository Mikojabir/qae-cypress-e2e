class signOutPage {

    btN_profile() {
       const button = cy.get(
         'div.col:nth-child(5) > div:nth-child(1) > a:nth-child(1) > div');
       button.click();
     }

     btN_signOut1() {
        cy.get('html body div#__nuxt div#__layout div div.view-mobile div.main-content div.page-container.page-profile div.container.p-3 div.mt-3 button.btn.btn-block.btn-default.btn-outline-primary.mt-3')
        .should('be.visible')
        .click();
     }

     btN_signOut2() {
        cy.get('button.btn-outline-primary:nth-child(1)')
        .should('be.visible')
        .click();
      }
}

export default signOutPage;

