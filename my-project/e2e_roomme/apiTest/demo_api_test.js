import default_conf from '../default_conf.js'

describe('HTTP Example', function(){
    
    it("GET", function () {
      cy.request({
        method: "GET",
        url: "https://web.roomme.id:8081/api/banner",
      }).should((response) => {
        expect(response.status).equal(200);
        expect(response.headers['content-type']).to.eq('application/json');
        expect(response.body).to.have.length(8);
      });
    });


    it.skip('POST', function(){

        cy.request({
            method: 'POST',
            url: 'http://httpbin.org/post',
            body: {
                'name': 'jabir',
                'age': 20
            },
            headers: {
                'Content-Type': 'application/json'
            }            
        }).then(function (response) {

            expect(response.body).have.property('json');
            expect(response.body.json).to.deep.equal({

                "name": "jabir",
                "age": 20
            });

        });

    });

});