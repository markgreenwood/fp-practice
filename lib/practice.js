function getUserAges(inputData) { // eslint-disable-line no-unused-vars
  return inputData.map(obj => obj['dob']['age']);
}

function getAverageUserAge(inputData) { // eslint-disable-line no-unused-vars
  return inputData.map(obj => obj['dob']['age']).reduce((acc, curr) => {
    return (acc + curr);
  }, 0) / inputData.length;
}

function getUsersWithBadPasswords(inputData) { // eslint-disable-line no-unused-vars
  
  return inputData
    .map(obj => ({ username: obj['login']['username'], password: obj['login']['password'] }))
    .filter(obj => obj.password.split('').length < 7)
    .map(obj => obj.username);
  
}


module.exports = {
  getUserAges,
  getAverageUserAge,
  getUsersWithBadPasswords
};
