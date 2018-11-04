var http = require('http');
var assert = require('assert');
var request = require('request');

// var server = require('/Users/s530479/Desktop/Fall 2018 sem/GDP-2/GDP-1Group4_Section2/main');
var server = require('../main');

// describe('Server Test', function() {
// 	before(function() {
// 		server.listen(8089);
// 	});

// 	after(function() {
// 		server.close();
// 	});

// 	describe('/', function() {
// 		it('should be test mocha', function(done) {
// 			http.get('http://127.0.0.1:8089', function(response) {
// 				assert.equal(response.statusCode, 200);
//                                 var body = '';
// 				response.on('data', function(d) {
// 					body += d;
// 				});
// 				response.on('end', function() {
// 					assert.equal(body, 'Test Mocha');
// 					done();
// 				});
// 			});
// 		});
// 	});
// });
// describe('Checking one function', function(){
// 	it('should test')
// })
describe("Running server on port", function() {
	describe("GET /", function() {
	  it("returns status code 200", function(done) {
		request.get('http://127.0.0.1:8089', function(error, response, body) {
		  assert.equal(200, response.statusCode);
		done();
		});
	  });
	});
  });

  describe("Testing find page", function() {
	describe("GET find/", function() {
	  it("returns status code 200", function(done) {
		request.get('http://127.0.0.1:8089/find', function(error, response, body) {
		  assert.equal(200, response.statusCode);
		done();
		});
	  });
	});
	});
	describe("Testing Rental page", function() {
		describe("GET Rental page/", function() {
			it("returns status code 200", function(done) {
			request.get('http://127.0.0.1:8089/rental', function(error, response, body) {
				assert.equal(200, response.statusCode);
			done();
			});
			});
		});
		});
		describe("Testing rental form page", function() {
			describe("GET Basic information page/", function() {
				it("returns status code 200", function(done) {
				request.get('http://127.0.0.1:8089/basic', function(error, response, body) {
					assert.equal(200, response.statusCode);
				done();
				});
				});
			});
			});

