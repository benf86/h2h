const uuid = require('uuid');
const { Base } = require('./base');


class Conversation extends Base {
  constructor(params) {
    super();
    this.id = params.id || uuid.v4();
    this.listener = params.listener;
    this.talker = params.talker;
  }
}

module.exports = {
  Conversation,
};
