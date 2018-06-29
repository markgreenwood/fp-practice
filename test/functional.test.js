const R = require('ramda');
const axios = require('axios');
const { expect } = require('chai');

const { getUserAges, getAverageUserAge, getUsersWithBadPasswords } = require('../lib/practice');

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

  context('when I apply solution to getUserAges', () => {
    let result;

    beforeEach(async () => {
      const inputData = await axios
        .get('http://randomuser.me/api/?results=5&seed=theSeed')
        .then(R.path(['data', 'results']));
      result = getUserAges(inputData);
    });

    it('will calculate the age of each user', () => {
      expect(result.length).to.equal(5);
      expect(result).to.deep.equal([
        21, 40, 58, 71, 23
      ]);
    });
  });

  context('when I apply getAverageUserAge', () => {
    let result;

    beforeEach(async () => {
      const inputData = await axios
        .get('http://randomuser.me/api/?results=5&seed=theSeed')
        .then(R.path(['data', 'results']));
      result = getAverageUserAge(inputData);
    });

    it('will calculate the average age of the users', () => {
      expect(result).to.equal(42.6);
    });
  });

  context('when I apply getUsersWithBadPasswords', () => {
    let result;

    beforeEach(async () => {
      const inputData = await axios
        .get('http://randomuser.me/api/?results=5&seed=theSeed')
        .then(R.path(['data', 'results']));
      result = getUsersWithBadPasswords(inputData);
    });

    it.only('will return the names of users with bad passwords (<7 characters)', () => {
      expect(result).to.deep.equal(['sadwolf742', 'whitefrog500']);
    });
  });
});
