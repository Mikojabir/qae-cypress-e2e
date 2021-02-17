import homeNav from '../object/homePage'
import handler from '../object/keyHandler'

describe('Slider Banner', function () {

    it('Slider Banner', function () {

        const r_home = new homeNav();
        const r_handle = new handler();

        r_home.visit();
        r_handle.stayToClosed();

        const bNext = cy.get('div.swiper-button-next:nth-child(4)');
        for (let i = 0; i < 7; i++) {
            bNext.click().wait(2000);
        }
        cy.log('berhasil next sampai banner terakhir')

        const bPrev = cy.get('div.swiper-button-prev:nth-child(3)');
        for (let i = 0; i < 7; i++) {
            bPrev.click().wait(2000);
        }
        cy.log('berhasil prev sampai back to first banner')

    });

});
