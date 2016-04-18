# reqqer (wip)

Requires made easy.

[![Build Status](https://travis-ci.org/opensoars/reqqer.svg)](https://travis-ci.org/opensoars/reqqer)
[![Coverage Status](https://coveralls.io/repos/opensoars/reqqer/badge.svg?branch=master&service=github&bust=1)](https://coveralls.io/github/opensoars/reqqer?branch=master)
[![Inline docs](http://inch-ci.org/github/opensoars/reqqer.svg?branch=master&bust=1)](http://inch-ci.org/github/opensoars/reqqer)
[![Codacy Badge](https://api.codacy.com/project/badge/f3e64501763645b9aa483bf83a4dd1d5)](https://www.codacy.com/app/sam_1700/reqqer)
[![Code Climate](https://codeclimate.com/github/opensoars/reqqer/badges/gpa.svg)](https://codeclimate.com/github/opensoars/reqqer)
[![Dependency Status](https://david-dm.org/opensoars/reqqer.svg)](https://david-dm.org/opensoars/reqqer)
[![devDependency Status](https://david-dm.org/opensoars/reqqer/dev-status.svg)](https://david-dm.org/opensoars/reqqer#info=devDependencies)

---


## Install

`npm install reqqer`


## Use

ES 2015
```js
var reqs = require('reqqer')({
  https: 'https',
  http: 'http'
});

var https = reqs.https,
    http = reqs.http;
```

ES 2016
```js
const {https, http} = require('reqqer')(['https', 'http']);
```


## Documentation

1. `npm run doc`
2. Open `doc/jsdoc/index.html`


## Tests and code coverage

1. `npm run local_test`
2. Open `coverage/lcov-report/index.html`


## Development

1. `git clone https://github.com/opensoars/reqqer`
2. `cd reqqer`
3. `npm install`