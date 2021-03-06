const expect = require('chai').expect;
const objectFunctions = require('../src/objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
	describe('`keys`', () => {
    	it('should be a function', () => {
  			const keys = objectFunctions.keys;
  			expect(keys).to.be.an('function');
  		});
  		it('should return key1', () => {
  			const keys = objectFunctions.keys;
  			const result = keys({key1: 'one', key2: 'two'});
  			expect(result[0]).to.equal('key1');
  		});
  	});
  	describe('`values`', () => {
    	it('should be an object', () => {
  			const values = objectFunctions.values;
  			expect(values).to.be.an('function');
  		});
  		it('should return one', () => {
  			const values = objectFunctions.values;
  			const result = values({key1: 'one', key2: 'two'});
  			expect(result[0]).to.equal('one');
  		});
  	});
  	describe('`mapObject`', () => {
    	it('should be a function', () => {
  			const mapObject = objectFunctions.mapObject;
  			expect(mapObject).to.be.an('function');
  		});
  		it('should return two', () => {
  			const mapObject = objectFunctions.mapObject;
  			const result = mapObject({key1: 'one', key2: 'two'}, (value)=>{
  				return value;
  			});
  			expect(result['key2']).to.equal('two');
  		});
    });
    describe('`pairs`', () => {
    	it('should be a function', () => {
  			const pairs = objectFunctions.pairs;
  			expect(pairs).to.be.an('function');
  		});
  		it('should return key2', () => {
  			const pairs = objectFunctions.pairs;
        const result = pairs({key1: 'one', key2: 'two'});
        // console.log(result);
  			expect(result[1][0]).to.equal('key2');
  		});
    });
    describe('`invert`', () => {
    	it('should be a function', () => {
  			const invert = objectFunctions.invert;
  			expect(invert).to.be.an('function');
  		});
  		it('should return key2', () => {
  			const invert = objectFunctions.invert;
        const result = invert({key1: 'one', key2: 'two'});
        // console.log(result);
  			expect(result['two']).to.equal('key2');
  		});
    });
    describe('`defaults`', () => {
    	it('should be a function', () => {
  			const defaults = objectFunctions.defaults;
  			expect(defaults).to.be.an('function');
  		});
  		it('should return one', () => {
  			const defaults = objectFunctions.defaults;
        const result = defaults({}, {key1: 'one', key2: 'two'});
        // console.log(result);
  			expect(result['key1']).to.equal('one');
      });
      it('should return null', () => {
  			const defaults = objectFunctions.defaults;
        const result = defaults({key1: 'key'}, {key1: 'one', key2: 'two'});
        // console.log(result);
  			expect(result['key1']).to.equal('key');
  		});
  	});
});