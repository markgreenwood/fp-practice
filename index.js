const axios = require('axios');
const moment = require('moment');
const R = require('ramda');

(async () => {
  const results = await axios.get('http://randomuser.me/api/?results=5&seed=0');
  console.log(JSON.stringify(results.data, null, 2));

  const ages = R.map((person) => moment.duration(moment().diff(moment(person.dob))).as('years'))(results.data.results);
  console.log(ages);

  const unamePasswords = R.map(
    R.applySpec({
      username: R.path(['login', 'username']),
      password: R.path(['login', 'password'])
    }),
    results.data.results
  );
  console.log(unamePasswords);

  const badPasses = R.filter((user) => R.prop('password', user).length < 7, unamePasswords);
  console.log(badPasses);
})();
