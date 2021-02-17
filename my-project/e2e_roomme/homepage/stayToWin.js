import homeNav from '../object/homePage'
import handler from '../object/keyHandler'

describe('Promo StayToWin', function () {

    it('StayToWin Promo on Homepage', function () {

        const r_home = new homeNav();

        const r_handle = new handler();

        r_home.visit();

        r_handle.stayToExist();

    });

});
