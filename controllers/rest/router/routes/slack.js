module.exports = globals => [
  {
    description: 'Slack control',
    method: 'post',
    route: '/',
    cb: params => query => body => ({
      listen: globals.services.user.create(params)(query)(Object.assign({}, body, { listener: true }))
      .then(r => r.map(e => ({
        text: `Your username is ${e.silly_name}`,
      }))[0]),
      talk: globals.services.user.get({ listener: true })(query)({})
      .then(r => r.map(e => e.silly_name)),
      say: globals.services.user.get({ silly_name: body.text.split(' ', 3).slice(1, 3).join(' ') })()()
      .then(r => r.map(e => ({
        text: body.text.slice(body.text.split(' ', 3).join(' ').length + 1),
        to: e.user_name,
      }))[0]),
    }[body.text.split(' ', 1)[0]]),
  },
];
