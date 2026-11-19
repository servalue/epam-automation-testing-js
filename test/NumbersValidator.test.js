import { expect } from 'chai';
import NumbersValidator from '../src/NumbersValidator.js';

describe('NumbersValidator', function () {
  const validator = new NumbersValidator();

  describe('isNumberEven', function () {
    it('should return true for an even number', function () {
      const result = validator.isNumberEven(4);

      expect(result).to.equal(true);
    });

    it('should return false for an odd number', function () {
      const result = validator.isNumberEven(5);

      expect(result).to.equal(false);
    });

    it('should return true for a negative even number', function () {
      const result = validator.isNumberEven(-4);

      expect(result).to.equal(true);
    });

    it('should return false for a decimal number', function () {
      const result = validator.isNumberEven(2.5);

      expect(result).to.equal(false);
    });

    it('should reject null', function () {
      expect(() => validator.isNumberEven(null))
        .to.throw(Error);
    });

    it('should throw an error for a non-number', function () {
      expect(() => {
        validator.isNumberEven('4');
      })
        .to.throw(Error, '[4] is not of type "Number" it is of type "string"');
    });
  });
  describe('getEvenNumbersFromArray()', function () {
    it('should return even numbers from a mixed array', function () {
      const result = validator.getEvenNumbersFromArray([1, 2, 3, 4]);

      expect(result).to.deep.equal([2, 4]);
    });

    it('should return all numbers when every number is even', function () {
      const result = validator.getEvenNumbersFromArray([2, 4, 6]);

      expect(result).to.deep.equal([2, 4, 6]);
    });

    it('should return an empty array when all numbers are odd', function () {
      const result = validator.getEvenNumbersFromArray([1, 3, 5]);

      expect(result).to.deep.equal([]);
    });

    it('should exclude decimal numbers that are not even integers', function () {
      const result = validator.getEvenNumbersFromArray([2, 2.5, 4]);

      expect(result).to.deep.equal([2, 4]);
    });

    it('should return an empty array for an empty array', function () {
      const result = validator.getEvenNumbersFromArray([]);

      expect(result).to.deep.equal([]);
    });

    it('should return negative even numbers', function () {
      const result = validator.getEvenNumbersFromArray([-4, -3, -2]);

      expect(result).to.deep.equal([-4, -2]);
    });

    it('should exclude NaN', function () {
      const result = validator.getEvenNumbersFromArray([2, NaN, 4]);

      expect(result).to.deep.equal([2, 4]);
    });

    it('should reject null', function () {
      expect(() => validator.getEvenNumbersFromArray(null))
        .to.throw(Error);
    });
    it('should throw the correct error for a non-number element', function () {
      expect(() => validator.getEvenNumbersFromArray([1, '2']))
        .to.throw(Error, '[1,2] is not an array of "Numbers"');
    });
    it('should throw the correct error when the argument is not an array', function () {
      expect(() => validator.getEvenNumbersFromArray('123'))
        .to.throw(Error, '[123] is not an array of "Numbers"');
    });
  });
});
