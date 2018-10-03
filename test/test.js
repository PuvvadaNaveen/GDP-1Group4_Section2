var http = require('http');
var assert = require('assert');

var server = require('./main.js');

describe('Server Test', function() {
	before(function() {
		server.listen(8089);
	});

	after(function() {
		server.close();
	});

	describe('/', function() {
		it('should be test mocha', function(done) {
			http.get('http://127.0.0.1:8089', function(response) {
				assert.equal(response.statusCode, 200);
                                var body = '';
				response.on('data', function(d) {
					body += d;
				});
				response.on('end', function() {
					assert.equal(body, 'Test Mocha');
					done();
				});
			});
		});
	});
});