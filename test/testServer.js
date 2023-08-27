let expect = require('chai').expect;
let request = require('request');

let url = 'http://localhost:3000/api/cat';

let cat = {
    title:'',
    subTitle:'',
    path:'',
    description:''
}


describe('Test GET API :All Cats', function() {
    it('returns status code of 200', function(done){
        request(url, function(error,response,body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('return status code of 404', function(done){
        request('http://localhost:3000/api/cats', function(error,response,body){
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    it('return succesful message', function(done){
        request(url, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('success');
            done();
        });
    });

    it('returns an array', function(done){
        request(url, function(error,response,body){
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('Test post a Cat:', function() {
    it('insert a cat to database and statuscode 200', function(done){
        request.post({url:url, form:cat}, function(error,response,body){
           let  bodyObj = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(bodyObj.message).to.contain('success');
            done();
        });
    });

    it('Test the post cat json response', function(done){
        request.post({url:url, form:cat}, function(error,response,body){
            let bodyObj = JSON.parse(body);
            expect(bodyObj.data.acknowledged).to.equal(true);
            expect(bodyObj.message).to.equal("success");
            done();
        });
    });
});

describe('Delete a Cat:', function(){
    it('delete a cat from database', function(done){
        request.delete({url:url, form: cat}, function(error,response,body){
            let bodyObj = JSON.parse(body);
            expect(bodyObj.message).to.contain('success');
            done();
        });
    });
});
