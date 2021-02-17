class handler {

    //Promo StayToWin
    stayToExist(){
        cy.get('#stayToWin___BV_modal_body_')
        .should('be.visible')
        .click();
    }

    stayToClosed(){
        cy.get('.close-btn')
        .should('have.class', 'close-btn')
        .click();
    }

}

export default handler;