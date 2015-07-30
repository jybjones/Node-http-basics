var http = require('http');
var https= require('https');

module.exports = function(port) {
  http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url === '/weather') {
    var API_KEY = 'a5dd1792bd6e450c6a3a73c0c29da6f4';
    var LOCATION = '36.1658,-86.7777';
    res.writeHeader(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  // http.get('http://swapi.co/api/films/')
  https.get('https://api.forecast.io/forecast/' + API_KEY + '/' + LOCATION)
  .on('response', function (xhr) {
    xhr.pipe(res);
    // var body = '';
    // xhr
    //   .on('data', function (chunk) {
    //     body += chunk;
    //   })
    //   .on('end', function () {
    //     var data = JSON.parse(body);
    //     var titles =  data.results.map(function(r) {
    //       return r.title;
    //     });
    //         res.write(JSON.stringify({titles: titles}));
    //         res.end();
    //   });
  });
} else if (req.method === 'GET' && req.url === '/starwarsmovies') {
 http.get('http://swapi.co/api/films/')
    .on('response', function (xhr) {
      var body = '';
      xhr
        .on('data', function (chunk) {
          body += chunk;
        })
        .on('end', function () {
          var data = JSON.parse(body)
          data.results.forEach(function(r) {
            res.write(r.title + '\n');
          });
          res.end();
        });
    });
 } else if (req.method === 'GET' && req.url.slicce(0,4) === '/cal') {
  res.writeHead(200);
  res.end();

  } else {
  res.writeHead(403);
  res.end('Access Denied!');
  }
  }).listen(port);
}
