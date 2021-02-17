import object_selector from './object_selector';

describe('Test Homepage', function() {

    it('Internet Banking', function() {

        const home = new object_selector();

        //Get URL
        home.visit();

        //clickBCA
        home.click_IB();

    });

    it('Virtual Account Bank', function() {

        const home = new object_selector();
        //click all VA
        home.click_VA();
    })

});