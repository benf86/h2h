const _ = require('lodash');
const baseRepositories = require('./base');

module.exports = globals => _.merge({}, baseRepositories(globals)('user'), {
  get: meta => data => globals.db(`${modelName}s`).where(meta || true).orWhere({ user_name: meta.id })
    .orWhere({ silly_name: meta.id }),
});
