/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  describe('`each`', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    it('second call should equal 2', () => {
      const each = arrayFunctions.each;
      const spyCallBack = sinon.spy(x => x + 2);
      each([4, 5, 6], spyCallBack);
      expect(spyCallBack.secondCall.returnValue).to.equal(7);
    });
    it('callCount should equal 3', () => {
      const each = arrayFunctions.each;
      const spyCallBack = sinon.spy();
      each([4, 5, 6], spyCallBack);
      expect(spyCallBack).to.have.callCount(3);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it('should return a correct result', () => {
      const map = arrayFunctions.map;
      const spyCallBack = sinon.spy(x => x * 2);
      const result = map([1, 2, 3, 4], spyCallBack);
      expect(result[2]).to.equal(6);
      expect(result[0]).to.equal(2);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should return number 15', () => {
      const spyCallBack = sinon.spy((memo, item) => memo + item);
      const reduce = arrayFunctions.reduce;
      const result = reduce([4, 5, 6], spyCallBack, 0);
      expect(result).to.equal(15);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
    it('should return 4', () => {
      const find = arrayFunctions.find;
      const spyCallBack = sinon.spy(x => x > 3);
      const result = find([2, 3 ,4], spyCallBack);
      expect(result).to.equal(4);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
<<<<<<< HEAD
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      const r = filter([2, 3], (x)=>{
        return x > 2
      });
      console.log(r);
=======
    it('should return the length of 2', () => {
      const spyCallBack = sinon.spy((item) => item > 2);
      const result = filter([2, 3 ,4], spyCallBack);
      // console.log(result);
      // expect(result).to.be.an('array');
      expect(result.length).to.equal(2);
>>>>>>> 5bd3660237787e74b6c7fbe520cd36e3fb245b1f
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should return the length of [1, 2, 3, 4]', () => {
      const spyCallBack = sinon.spy();
      const result = flatten([1, [2, 3], 4], spyCallBack);
      console.log(result);
      // expect(result).to.be.an('array');
      expect(result.length).to.equal(4);
    });
  });
});
