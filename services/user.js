const _ = require('lodash');
const baseServices = require('./base');
const { User } = require('../models/user');

module.exports = globals => _.merge({}, baseServices(globals)('user'), {
  create: params => query => body =>
    globals.repositories.user.get({ id: body.slack_name })()
      .then(existingUser => (existingUser[0]
          ? existingUser
          : globals.repositories.user
            .create()(new User(_.merge({}, body)))
            .then(newUser => globals.repositories.user.get({ id: newUser[0] })())
      )),
});
