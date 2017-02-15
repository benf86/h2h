module.exports = globals => modelName => ({
  get: meta => data => globals.db(`${modelName}s`).where(meta || true),
  create: meta => data => globals.db(`${modelName}s`).insert(data),
  update: meta => data => globals.db(`${modelName}s`).where(meta).update(data),
  delete: meta => data => globals.db(`${modelName}s`).where(meta).delete(),
});
