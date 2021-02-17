import SignInpage from '../elements/loginPage';
import home from '../elements/homePage';
import signOutPage from '../elements/logoutPage';
import config from './config';

describe('RoomME OS Applications', function () {

    it('Homepage', function() {

        const signIn = new SignInpage();
        const h_page = new home();
        
            // run these tests as if in a desktop
            // browser with a mobile monitor
            signIn
            .resolution();

            //getUrl
            signIn
            .visit();

            cy.get('div.auth-form-wrapper')
            .should(($getLabel) => {
                expect($getLabel).to.contain('Email Address');
                expect($getLabel).to.contain('Password');
                expect($getLabel).to.contain('Remember Me');
                expect($getLabel).to.contain('Forgot Password');
                expect($getLabel).to.contain('Sign In');
                expect($getLabel).to.contain('If you haven’t setup your password');
                expect($getLabel).to.contain('please click here');
            
            });

            signIn.submit();

            signIn
            .getEmailError()
            .should('have.text', config.errorEmail_1)
            .contains('Email Address is required')

            signIn
            .getPasswordError()
            .should('have.text', config.errPass_)
            .contains('Password is required');
            
            cy.get('.auth-form').within(() => {

                signIn
                .fillEmail(config.username)
                .fillPassword(config.password)
                .submit()
            });

            cy.server().should((req) => {
                expect(req.method).to.equal('GET')
                expect(req.status).to.eq(200)
                });

         
         //Click Today Transaction link
         h_page
         .btn_TodTrx();
         cy.log('Klik Today Trx - Sukses')
 
         //Click Total Occupancy
         h_page
         .btn_Occupied();
         cy.log('Klik Occupied - Sukses')

         h_page
         .btn_Vacant();
         cy.log('Klik Vacant - Sukses')

         h_page
         .btn_Closed();
         cy.log('Klik Closed - Sukses')

         h_page
         .btn_PayDue();
         cy.log('Klik Payment Due - Sukses')

         h_page
         .btn_Chat();

        
        //Check Label on footer
        cy.get('div.mobile-main-menu')
        .should(($getHome_label) => {
            expect($getHome_label).to.contain('Home')
            expect($getHome_label).to.contain('Rooms')
            expect($getHome_label).to.contain('Transaction')
            expect($getHome_label).to.contain('Ledger')
            expect($getHome_label).to.contain('Profile')
            });

        });

        
    
    it.skip('Active Balance 0 - Button Withdraw Disabled', function() {

            const signIn = new SignInpage();
            
                // run these tests as if in a desktop
                // browser with a mobile monitor
                signIn
                .resolution();
    
                //getUrl
                signIn
                .visit();
    
                cy.get('.auth-form').within(() => {
    
                    signIn
                    .fillEmail(config.username)
                    .fillPassword(config.password)
                    .submit()
                });

                cy.server().should((req) => {
                    expect(req.method).to.equal('GET')
                    expect(req.status).to.eq(200)
                    });
                
                
    
            //Check element disabled button
            if (cy.get('#__layout > div:nth-child(1) > div > div.main-content > div > div.content-loader.position-relative > div > div.content-wrapper.py-3 > div > div.balance-wrapper.p-2.mt-3 > div > div.col-7 > div > div.mt-1 > span')
            .should(($bal_active) => {
                expect($bal_active).to.be.value('')
            })) {
                cy.get('#__layout > div:nth-child(1) > div > div.main-content > div > div.content-loader.position-relative > div > div.content-wrapper.py-3 > div > div.balance-wrapper.p-2.mt-3 > div > div.col-5 > div > a > button')
                .should('be.disabled')
                cy.log('Button Withdraw is disabled...!!')
            }
    
    });
    
    it.skip('Active Balance != 0 - Button Withdraw Enabled', function() {
    
            const signIn = new SignInpage();
            
                // run these tests as if in a desktop
                // browser with a mobile monitor
                signIn
                .resolution();
    
                //getUrl
                signIn
                .visit();
    
                cy.get('.auth-form').within(() => {
    
                    signIn
                    .fillEmail(config.user1)
                    .fillPassword(config.pass1)
                    .submit()
                });
                
    
            if (cy.get('#__layout > div:nth-child(1) > div > div.main-content > div > div.content-loader.position-relative > div > div.content-wrapper.py-3 > div > div.balance-wrapper.p-2.mt-3 > div > div.col-7 > div > div.mt-1 > span')
            .should(($bal_active) => {
                expect($bal_active).not.to.be.empty
            })) {
            cy.get('#__layout > div:nth-child(1) > div > div.main-content > div > div.content-loader.position-relative > div > div.content-wrapper.py-3 > div > div.balance-wrapper.p-2.mt-3 > div > div.col-5 > div > a > button')
            .should(($btnOn) => {
                expect($btnOn).to.be.enabled
                }).click();
            } else {
                cy.log('ERROR BINGUNG SAYA !!')
            } 

    });

    it.skip('Logout Applications', function() {

        const signIn = new SignInpage();
        const signOut = new signOutPage();

        signIn
        .resolution();

        //getUrl
        signIn
        .visit();

        cy.get('.auth-form').within(() => {
            signIn
            .fillEmail(config.username)
            .fillPassword(config.password)
            .submit()
        });
        
        cy.server().should((req) => {
            expect(req.method).to.eq('GET')
            expect(req.status).to.eq(200)
                });


        //click profile
        signOut
        .btN_profile();
        cy.wait(3000);
        
        cy.server().should((req) => {
        expect(req.method).to.eq('GET')
        expect(req.status).to.eq(200)
            });

        //click sign out button1
        signOut
        .btN_signOut1();

        //Logout btN, check message and label name button
        cy.get('.custom-dialog-body')
            .should(($getSignOut_) => { 
                expect($getSignOut_).to.contain('Sign Out')
                expect($getSignOut_).to.contain('Are you sure you want to sign out?')
                expect($getSignOut_).to.contain('Sign Out')
                expect($getSignOut_).to.contain('Cancel')
        });

        //click sign out button2
        signOut
        .btN_signOut2();

    });

});
