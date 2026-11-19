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
});
