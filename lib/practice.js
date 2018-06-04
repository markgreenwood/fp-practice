const moment = require('moment');
const R = require('ramda');

function getUserAges(inputData) { // eslint-disable-line no-unused-vars
  const dobs = R.pluck('dob')(inputData);
  const ages = R.map(item => moment.duration(moment().diff(moment(item))).as('years'))(dobs);
  return R.map(Math.trunc)(ages);
}

function getAverageUserAge(inputData) { // eslint-disable-line no-unused-vars
  return R.mean(getUserAges(inputData));
}

function getUsersWithBadPasswords(inputData) { // eslint-disable-line no-unused-vars
  console.log('getUsersWithBadPasswords operating on:\n', inputData);
  const unames = R.map(
    R.applySpec({
      username: R.path(['login', 'username']),
      password: R.path(['login', 'password'])
    }),
    inputData
  );
  const unamesWithBadPass = R.filter((user) => R.prop('password', user).length < 7)(unames);
  return R.map(R.prop('username'), R.filter((user) => R.prop('password', user).length < 7, unames));
}

module.exports = {
  getUserAges,
  getAverageUserAge,
  getUsersWithBadPasswords
};
