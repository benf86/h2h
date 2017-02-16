module.exports = globals => [
  {
    description: 'Slack control',
    method: 'post',
    route: '/',
    cb: params => query => body => ({
      listen: globals.services.user.create(params)(query)(Object.assign({}, body, { listener: true })),
      talk: globals.services.conversation.create(params)(query)(body),
    }[body.text.split(' ', 1)[0]]),
  },
];
