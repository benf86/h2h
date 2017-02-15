const _ = require('lodash');
const baseServices = require('./base');
const { User } = require('../models/user');

module.exports = globals => _.merge({}, baseServices(globals)('user'), {
  create: params => query => body =>
    globals.repositories.user.get({ slack_name: body.slack_name })()
      .then(existingUser => (existingUser[0]
          ? existingUser[0]
          : globals.repositories.user
            .create()(new User(_.merge({}, body))).then(newUser => globals.repositories.user.get({ id: newUser[0] })())
      )),
});
