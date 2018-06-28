function getUserAges(inputData) { // eslint-disable-line no-unused-vars
  // console.log(inputData[0]['dob']);
  return inputData.map(obj => obj['dob']['age']);
  
  
}

function getAverageUserAge(inputData) { // eslint-disable-line no-unused-vars
  return inputData.map(obj => obj['dob']['age']).reduce((acc, curr) => {
    return (acc + curr);
  }, 0);
}

function getUsersWithBadPasswords(inputData) { // eslint-disable-line no-unused-vars
}

module.exports = {
  getUserAges,
  getAverageUserAge,
  getUsersWithBadPasswords
};
