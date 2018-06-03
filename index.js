const axios = require('axios');
const moment = require('moment');
const R = require('ramda');

(async () => {
  const results = await axios.get('http://randomuser.me/api/?results=5&seed=theSeed');
  console.log(JSON.stringify(results.data, null, 2));

  const ages = R.map((person) => moment.duration(moment().diff(moment(person.dob))).as('years'))(results.data.results);
  console.log(ages);
})();
