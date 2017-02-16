const sillyName = require('sillyname');
const { Base } = require('./base');

class User extends Base {
  constructor(params) {
    super();
    this.id = params.id;
    this.user_name = params.user_name;
    this.silly_name = params.silly_name || sillyName();
    this.listener = params.listener || false;
  }
}

module.exports = {
  User,
};
