const routes = require('./routes');

const response = cb => (req, res, next) =>
  Promise.resolve(cb(req.params)(req.query)(req.body))
  .then(r => res.json(r))
  .catch((e) => {
    console.error(e);
    res.json(e);
  });

module.exports = globals =>
  (routes(globals)
    .forEach(route =>
      globals.router[route.method](route.route, response(route.cb))));
