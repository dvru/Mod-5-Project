exports.up = function(knex) {
    return knex.schema.createTable('users', (t) => {
        t.increments('id');
        t.string('username');
        t.string('password');
        t.integer('age');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
