const { Base } = require('./base');


class Conversation extends Base {
  constructor(params) {
    super();
    this.id = params.id;
    this.id_listener = params.listener;
    this.id_talker = params.talker;
  }
}

module.exports = {
  Conversation,
};
