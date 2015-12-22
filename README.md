# reqqer (wip)

Requires made easy.

[![Build Status](https://travis-ci.org/opensoars/reqqer.svg)](https://travis-ci.org/opensoars/reqqer)
[![Coverage Status](https://coveralls.io/repos/opensoars/reqqer/badge.svg?branch=master&service=github)](https://coveralls.io/github/opensoars/reqqer?branch=master)
[![Inline docs](http://inch-ci.org/github/opensoars/reqqer.svg?branch=master)](http://inch-ci.org/github/opensoars/reqqer)
[![Codacy Badge](https://api.codacy.com/project/badge/f3e64501763645b9aa483bf83a4dd1d5)](https://www.codacy.com/app/sam_1700/reqqer)
[![Code Climate](https://codeclimate.com/github/opensoars/reqqer/badges/gpa.svg)](https://codeclimate.com/github/opensoars/reqqer)
[![Dependency Status](https://david-dm.org/opensoars/reqqer.svg)](https://david-dm.org/opensoars/reqqer)
[![devDependency Status](https://david-dm.org/opensoars/reqqer/dev-status.svg)](https://david-dm.org/opensoars/reqqer#info=devDependencies)

---


## Install

`npm install reqqer`

## Use

```js
// Old way
var reqs = require('reqqer')({
  https: 'https',
  http: 'http'
});

var https = reqs.https,
    http = reqs.http;
```

```js
// New way 
let {https, http} = require('reqqer')({https, http});
```

