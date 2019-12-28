exports.up = function(knex) {
    return knex.schema.createTable('users', (t) => {
        t.increments('id');
        t.string('firstName');
        t.string('lastName');
        t.string('username');
        t.integer('age');
        t.string('email');
        t.string('password');
       

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};


  
