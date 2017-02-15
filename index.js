'use strict';

const config = require('./config')(process.env.NODE_ENV);
const express = require('express');
const bodyParser = require('body-parser');

const utils = require('./utils');
const db = require('./data/db')(config);

const app = express();
const router = express.Router();

const globals = {
  utils: utils(this),
  db,
  config,
  router,
};

router.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
router.use(bodyParser.json({ limit: '50mb' }));

globals.models = require('./models')(globals);
globals.repositories = require('./repositories')(globals);
globals.services = require('./services')(globals);
require('./controllers/rest/router')(globals);

app.use(router);

console.log(`Server listening on port ${config.infrastructure.port} in environment ${process.env.NODE_ENV}`);
app.listen(config.infrastructure.port);
