exports.up = function(knex) {
    return knex.schema.createTable('comments', t => {
        t.increments('id');
        t.string('content');
        t.integer('issue_id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};