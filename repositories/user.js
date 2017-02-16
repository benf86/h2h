const _ = require('lodash');
const baseRepositories = require('./base');

module.exports = globals => _.merge({}, baseRepositories(globals)('user'), {
  get: meta => data => globals.db('users')
    .where(meta || true)
    .orWhere({ user_name: meta.id || -1 })
    .orWhere({ silly_name: meta.id || -1 }),
});
