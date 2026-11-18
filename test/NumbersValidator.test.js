import { expect } from 'chai';
import NumbersValidator from '../src/NumbersValidator.js';

describe('NumbersValidator', function () {
  const validator = new NumbersValidator();

  describe('isNumberEven', function () {
    it('should return true if the number is even', function () {
      const result = validator.isNumberEven(4);
      expect(result).to.equal(true);
    });

    it('should return false if the number is odd', function () {
      const result = validator.isNumberEven(3);
      expect(result).to.equal(false);
    });

    it('should return true for zero', function () {
      const result = validator.isNumberEven(0);
      expect(result).to.equal(true);
    });

    it('should return true for a negative even number', function () {
      const result = validator.isNumberEven(-4);
      expect(result).to.equal(true);
    });

    it('should return false for a negative odd number', function () {
      const result = validator.isNumberEven(-5);

      expect(result).to.equal(false);
    });

    it('should return false for a decimal number', function () {
      const result = validator.isNumberEven(2.5);

      expect(result).to.equal(false);
    });

    it('should throw an error for a string', function () {
      expect(() => validator.isNumberEven('4'))
        .to.throw(Error, '[4] is not of type "Number" it is of type "string"');
    });

    it('should throw an error for null', function () {
      expect(() => validator.isNumberEven(null))
        .to.throw(Error, '[null] is not of type "Number" it is of type "object"');
    });

    it('should throw an error for undefined', function () {
      expect(() => validator.isNumberEven(undefined))
        .to.throw(Error, '[undefined] is not of type "Number" it is of type "undefined"');
    });

    it('should throw an error for a boolean', function () {
      expect(() => validator.isNumberEven(true))
        .to.throw(Error, '[true] is not of type "Number" it is of type "boolean"');
    });
  });
});
