
exports.up = function(knex) {
    return knex.schema.createTable('products', function(tbl) {
        tbl.increments('id');
        tbl.string('title', 50).notNullable();
        tbl.string('description', 500).notNullable();
        tbl.string('price', 50).notNullable();
        tbl.string('image', 250);
        tbl.boolean('likes').defaultTo(false);
        tbl.integer('likes_amount');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
