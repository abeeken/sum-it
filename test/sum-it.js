var expect = require('chai').expect;
var sumit = require('../app/sum-it');

describe("Sum It Calculator", function(){
    it("adds the numbers", function(){
        var answer = sumit.add(2, 2);
        expect(answer).to.equal(4);
    });
    it("subtracts the numbers", function(){
        var answer = sumit.subtract(4, 2);
        expect(answer).to.equal(2);
    });
    it("multiplies the numbers", function(){
        var answer = sumit.multiply(2, 3);
        expect(answer).to.equal(6);
    });
    it("divides the numbers", function(){
        var answer = sumit.divide(6, 2);
        expect(answer).to.equal(3);
    });
});