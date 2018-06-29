function getUserAges(inputData) { // eslint-disable-line no-unused-vars
  return inputData.map(obj => obj['dob']['age']);
}

function getAverageUserAge(inputData) { // eslint-disable-line no-unused-vars
  return inputData.map(obj => obj['dob']['age']).reduce((acc, curr) => {
    return (acc + curr);
  }, 0) / inputData.length;
}

function getUsersWithBadPasswords(inputData) { // eslint-disable-line no-unused-vars
  // inputData.map(obj => obj['login']['password']).filter(pword => {
  //   pword.split('').length < 7;
  // }).map(pword => {
  //   const nameObj = {};
  //   nameObj['login'][pword] = inputData
  //     .filter(nameObj => nameObj['login']['password'] == pword);
  //   // .map(nameObj => nameObj['username']);
  //   return nameObj['login']['username'];
  // });
  
  const pwordArray = inputData.map(obj => obj['login']['password']);
  const usernameArray = pwordArray.filter(pword => {
    return pword.split('').length < 7;
  });
  return usernameArray.map(pword => {
    inputData.filter(nameObj => nameObj['login']['password'] == pword).map(nameObj => nameObj['login']['username']);
    console.log('start', inputData.filter(nameObj => nameObj['login']['password'] == pword).map(nameObj => nameObj['login']['username'])
    );
  });
}


module.exports = {
  getUserAges,
  getAverageUserAge,
  getUsersWithBadPasswords
};
