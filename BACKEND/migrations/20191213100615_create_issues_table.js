exports.up = function(knex) {
    return knex.schema.createTable('issues', t => {
        t.increments('id');
        t.string('name');
        t.string('description')
        t.integer('user_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('issues');
};