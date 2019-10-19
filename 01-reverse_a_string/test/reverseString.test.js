const reverseString = require('../reverseString');

describe("reverseString", function() {
  it("should reverse a string containing one word", function() {
    var str = 'foobar';
    var result = reverseString(str);
    expect(result).toEqual('raboof');

  });

  it("should reverse a string containing multiple words", function() {

    var str = 'hello how are you today.'
    var result = reverseString(str);
    expect(result).toEqual('.yadot uoy era woh olleh');

  });

});

