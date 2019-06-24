var expect = require('chai').expect;
var main = require('../src/main');

describe('main()', function () {
    it('should give the cheapest price', function () {

        // 1. ARRANGE
        // var x = 5;
        // var y = 1;
        // var sum1 = x + y;

        // 2. ACT
        var operator = main.main("+46-73-212345");

        // 3. ASSERT
        expect(operator.price).to.be.equal(1.1);

    });
});

describe('prefixLength()', function () {
    it('should return the length of the longest prefix', function () {

        // 2. ACT
        var operator = main.prefixLength();

        // 3. ASSERT
        expect(operator).to.be.equal(5);

    });
});
describe('cleanNumber()', function () {
    it('should return the given phone number without special characters', function () {

        // 2. ACT
        var operator = main.cleanNumber("+46-73-212345");

        // 3. ASSERT
        expect(operator).to.be.equal("4673212345");

    });
});