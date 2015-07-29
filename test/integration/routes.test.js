var expect = require('chai').expect;
var http = require('http');
var path = require('path');

///Example of Integration test on a ROUTE//
describe('routes', function() {
    var port = Math.floor(Math.random() * 50000 + 10000);
    var url = 'http://localhost:' + port;
    //start the server!
    before(function() {
    require(path.join(process.cwd(), '/lib/server'))(port);
  });

  it('should respond to the /weather route', function(done){
    http.get(url + '/weather', function(res) {
      var body = '';
      expect(res.statusCode).to.equal(200);

    res
      .on('data', function(chunk) {
        body += chunk;
    })
      .on('end', function () {
        expect(body).to.contain('temperature');
      done();
    });
  });
});
});/////end of Integration test on a Route!
