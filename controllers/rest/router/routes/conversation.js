module.exports = globals => [
  {
    description: 'Get all conversation',
    method: 'get',
    route: '/conversation',
    cb: globals.services.conversation.get,
  },
  {
    description: 'Get a piece of conversation',
    method: 'get',
    route: '/conversation/:id',
    cb: globals.services.conversation.get,
  },
  {
    description: 'Create a piece of conversation',
    method: 'post',
    route: '/conversation',
    cb: globals.services.conversation.create,
  },
  {
    description: 'Modify a piece of conversation',
    method: 'put',
    route: '/conversation/:id',
    cb: globals.services.conversation.modify,
  },
];
