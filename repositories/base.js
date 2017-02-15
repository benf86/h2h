module.exports = globals => modelName => ({
  get: meta => data => globals.db(`${modelName}s`).where(meta || true).orWhere({ slack_name: meta.id })
    .orWhere({ silly_name: meta.id }),
  create: meta => data => globals.db(`${modelName}s`).insert(data),
  update: meta => data => globals.db(`${modelName}s`).where(meta).update(data),
  delete: meta => data => globals.db(`${modelName}s`).where(meta).delete(),
});
