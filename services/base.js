module.exports = globals => serviceName => ({
  get: params => query => body => globals.repositories[serviceName].get(params)(body),
  create: params => query => body => globals.repositories[serviceName].create(params)(body),
  update: params => query => body => globals.repositories[serviceName].update(params)(body),
  delete: params => query => body => globals.repositories[serviceName].delete(params)(body),
});
