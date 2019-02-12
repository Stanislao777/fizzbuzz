var assert = require ('assert');
var expect = require ('chai').expect;

var fizzBuzzFunctions = require('./src/fizzbuzz.js')

describe('fizzbuzz', function() {
    it('Deberia verificar fizzbuzz', function() {
       assert.equal(fizzBuzzFunctions.fizzbuzz(0),"FizzBuzz");
    });

    it('Deberia verificar fizzbuzz', function() {
        assert.equal(fizzBuzzFunctions.fizzbuzz(0),"FizzBuzz");
     });
});