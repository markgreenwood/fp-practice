# Functional Programming Practice

## Instructions

Clone this repo:

`git clone git@github.com:markgreenwood/fp-practice.git`

Run the tests (`npm test`). They will fail.

In the `practice.js` file, write three functions (`getUserAges`, `getAverageUserAge`, and `getUsersWithBadPasswords`) that will make the tests pass.

## The Required Functions

The input data is obtained from `http://randomuser.me/api`. The resulting data is the input to the different functions below. The format is:
```
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "nanna",
        "last": "christensen"
      },
      "location": {
        "street": "1597 skovgårdsvej",
        "city": "sønder stenderup",
        "state": "midtjylland",
        "postcode": 88352
      },
      "email": "nanna.christensen@example.com",
      "login": {
        "username": "lazyleopard532",
        "password": "5050",
        "salt": "T1JcvtTs",
        "md5": "121aae04cf20310647aac3817d3572ce",
        "sha1": "f0154b3721aa6c9cae1a9eaf5295e79fc7cbe1ac",
        "sha256": "a29bc3d6f70f4b572f45d041f3e3d6bef7d4010664267960ada77855004270f2"
      },
      "dob": "1990-08-26 20:31:30",
      "registered": "2014-01-07 11:16:49",
      "phone": "99171120",
      "cell": "84716722",
      "id": {
        "name": "CPR",
        "value": "839111-0703"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/59.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
      },
      "nat": "DK"
    },
    {
        ...<more users>...
    }
  ],
  "info": {
    "seed": "0",
    "results": 5,
    "page": 1,
    "version": "1.1"
  }
}

```

### getUserAges

This function should take the input data and return an array of the users' corresponding ages, calculated from the given D.O.B.

### getAverageUserAge

This function should compute and return the average user age in the given list of users.

### getUsersWithBadPasswords

This function should return a list of usernames from the set with bad passwords (defined as < 7 characters).
