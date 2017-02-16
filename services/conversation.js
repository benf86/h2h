const _ = require('lodash');
const baseServices = require('./base');
const { Conversation } = require('../models/conversation');

module.exports = globals => _.merge({}, baseServices(globals)('conversation'), {
  create: params => query => body =>
    globals.repositories.user.get({ id: body.user_name })()
      .then(user => (!user[0]
          ? Promise.resolve({
            code: 404,
            message: 'user not registered yet',
          })
          : globals.repositories.conversation
            .create()(new Conversation(_.merge({}, body,
              +user[0]
              ? { talker: user[0], listener: 0 }
              : { talker: user[0].id, listener: 0 } || { talker: 0, listener: 0 })))
      )),
});
