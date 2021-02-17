import default_conf from '../default_conf.js'

class homeNav {

      visit() {
        cy.visit(default_conf.prod, {timeout:80000});
      }

      view() {
        cy.viewport(1290, 720)
      }

      //Promo #StayToWin
      btN_cls_Stay(){
        cy.get('#stayToWin___BV_modal_body_')
        .click();

        cy.get('#stayToWin___BV_modal_body_')
        .should('have.class', 'close-btn')
        .click();
      }  

      //Article
      get_header_nav() {

        //Click Lucky Draw
        cy.get(':nth-child(1) > .top-menu', {timeout: 2000})
        .should('be.visible')
        .click();

        //Click Warung Me
        cy.get(':nth-child(2) > .top-menu', {timeout: 2000})
        .should('be.visible')
        .click();

        cy.go('back');

        //Click Artikel
        cy.get(':nth-child(3) > .top-menu', {timeout: 2000})
        .should('be.visible')
        .click();

        //Click Community
        cy.get(':nth-child(4) > .top-menu', {timeout: 2000})
        .should('be.visible')
        .click();

        //Click Landlord
        cy.get(':nth-child(5) > a.top-menu', {timeout: 2000})
        .should('be.visible')
        .click();

        //Click SignIn button
        cy.get('#dropdown-auth__BV_toggle_')
        .should('be.visible')
        .click();
      }

    get_BannerNav() {

      //button Next
      cy.get('div.swiper-button-next:nth-child(4)')
      .should('be.visible')
      .click()
      .wait(3000);
      cy.log("Berhasil Next Banner");

      //button prev
      cy.get('div.swiper-button-prev:nth-child(3)')
      .should('be.visible')
      .click();    
      cy.log("Berhasil Prev Banner")

    }

    click_banner() {
      //click banner ke-1
      cy.get('.swiper-slide-active > a > .dekstop')
      .should('be.visible')
      .click();
      cy.log("Berhasil Klik banner ke-1");

      //Next To banner 2
      cy.get('div.swiper-button-next:nth-child(4)')
      .should('be.visible')
      .click()
      .wait(3000);

      //click banner ke-2
      cy.get('.swiper-slide-active > a > .dekstop')
      .should('be.visible')
      .click();
      cy.log("Berhasil Klik banner ke-2");

      cy.scrollTo(0, 500);

      //Next To Banner 3
      cy.get('div.swiper-button-next:nth-child(4)')
      .click();
      cy.log("Berhasil Klik banner ke-3")
      .wait(3000);
      
      cy.scrollTo(0, 500);

      //click banner ke-3
      cy.get('.swiper-slide-active > a > .dekstop')
      .should('be.visible')
      .click();
      cy.log("Berhasil Klik banner ke-4")
      .wait(3000);
      
      cy.scrollTo(0, 500);

    }

  get_Chat(){
    //click 
    cy.get('#fc_frame > :nth-child(1)')
    .click()
    cy.wait(3000);

    //closed
    cy.get('.close mild')
    .click();
  }

}

export default homeNav;