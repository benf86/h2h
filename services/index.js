const conversation = require('./conversation');
const user = require('./user');

module.exports = globals => ({
  conversation: conversation(globals),
  user: user(globals),
});
