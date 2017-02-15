module.exports = globals => [
  {
    description: 'Get all users',
    method: 'get',
    route: '/user',
    cb: globals.services.user.get,
  },
  {
    description: 'Get a piece of user',
    method: 'get',
    route: '/user/:id',
    cb: globals.services.user.get,
  },
  {
    description: 'Create a piece of user',
    method: 'post',
    route: '/user',
    cb: globals.services.user.create,
  },
  {
    description: 'Modify a piece of user',
    method: 'put',
    route: '/user/:id',
    cb: globals.services.user.modify,
  },
];
