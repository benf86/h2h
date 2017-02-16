module.exports = globals =>
  require('./conversation')(globals)
  .concat(require('./user')(globals)
  .concat(require('./slack')(globals)));
