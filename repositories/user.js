const _ = require('lodash');
const baseRepositories = require('./base');

module.exports = globals => _.merge({}, baseRepositories(globals)('user'), {});
