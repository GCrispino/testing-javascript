const assert = require('assert');
const { parse, stringify } = require('../query');

describe('The query package', () => {
  describe('The parse function', () => {
    it('Should return an object of all query params when query string is passed to it', () => {
      const queryString = '?by=kati-frantz&popular=true&category=nodejs';

      const actual = parse(queryString);
      const expected = {
        by: 'kati-frantz',
        popular: 'true',
        category: 'nodejs',
      };

      assert.deepEqual(actual, expected);
    });

    it('Should return an object of all query params when query string is passed to it even if it does not start with a "?"', () => {
      const queryString = 'page=3&limit=10';

      const actual = parse(queryString);
      const expected = {
        page: '3',
        limit: '10',
      };

      assert.deepEqual(actual, expected);
    });
  });

  describe('The stringify function', () => {
    it('Should return a query string when an object is passed into it', () => {
      const obj = {
        by: 'kati-frantz',
        popular: 'true',
        category: 'nodejs',
      };

      const actual = stringify(obj);
      const expected = 'by=kati-frantz&popular=true&category=nodejs';

      assert.equal(actual, expected);
    });

    it("Should ignore object's keys whose values are null or undefined", () => {
      const obj = {
        someKey: undefined,
        by: 'kati-frantz',
        anotherKey: null,
        popular: 'true',
        category: 'nodejs',
      };

      const actual = stringify(obj);
      const expected = 'by=kati-frantz&popular=true&category=nodejs';

      assert.equal(actual, expected);
    });
  });
});
