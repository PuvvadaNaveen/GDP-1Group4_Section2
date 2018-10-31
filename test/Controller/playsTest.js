var assert = require('assert');
var PlayController = require('../../Controller/PlayController');

describe('PlayController', function () {

  describe('isValidPlay', function () {

    it('should return true if valid plays exists', function () {
      var isValid = PlayController.isValidPlay(['10/09/18', '10/10/18', 'Troy'], 'Troy')
      assert.equal(isValid, true);
    });

    it('should return false if invalid plays', function () {
      var isValid = PlayController.isValidPlay(['10/09/18', '10/10/18', 'Troy'], 'Sherlock')
      assert.equal(isValid, false);
    });

  });

});