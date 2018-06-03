const R = require('ramda');
const axios = require('axios');
const { expect } = require('chai');

const { problem1 } = require('../lib/practice');

describe('fp-practice problems', () => {
  context('when I get users', () => {
    let result;

    beforeEach(async () => {
      result = await axios
        .get('http://randomuser.me/api/?results=5&seed=theSeed')
        .then(R.path(['data', 'results']));
    });

    it('will return 5 users', () => {
      expect(result.length).to.equal(5);
    });
  });

  context('when I apply solution to problem1', () => {
    let result;

    beforeEach(async () => {
      const inputData = await axios
        .get('http://randomuser.me/api/?results=5&seed=theSeed')
        .then(R.path(['data', 'results']));
      result = problem1(inputData);
    });

    it('will calculate the age of each user', () => {
      expect(result.length).to.equal(5);
      expect(result).to.deep.equal([
        23,
        37,
        62,
        67,
        48
      ]);
    });
  });
});
