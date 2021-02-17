import homeNav from '../object/homePage'
import handler from '../object/keyHandler'

describe('Header Navigation Bar', function () {

    it('Header Navigation', function () {

        const r_home = new homeNav();
        const r_handle = new handler();

        r_home.visit();
        r_handle.stayToClosed();

        //Header Navigation.
        r_home.get_header_nav();

        //back to home
        cy.get('.logo', {timeout: 3000})
        .click();

        cy.get('.col-7 > div:nth-child(1) > div:nth-child(1) > div')
            .should(($headerLabel) => {
                expect($headerLabel).to.contain('Lucky Draw');
                expect($headerLabel).to.contain('WarungMe');
                expect($headerLabel).to.contain('Artikel');
                expect($headerLabel).to.contain('Community');
                expect($headerLabel).to.contain('Are You a Landlord?');
            });

    });

});