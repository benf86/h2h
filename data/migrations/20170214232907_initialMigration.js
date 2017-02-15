exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('conversations', function (table) {
      table.increments('id');
      table.string('id_listener').references('users').notNullable();
      table.string('id_talker').references('users');
      table.timestamps();
    }),

    knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('id');
      table.string('slack_name').notNullable();
      table.string('silly_name').notNullable();
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
