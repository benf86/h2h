exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('conversations', function (table) {
      table.increments('id');
      table.integer('id_listener').references('users');
      table.integer('id_talker').references('users');
      table.timestamps();
    }),

    knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('id');
      table.string('user_name');
      table.string('silly_name');
      table.boolean('listener').default(false);
      table.timestamps();
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('conversations'),
    knex.schema.dropTable('users'),
  ]);
};
