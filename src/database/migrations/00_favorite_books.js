exports.up = function(knex) {
  return knex.schema.createTable('favorite_books', function(table){
    table.string('id').primary();
    table.string('title').notNullable();
    table.string('authors').notNullable();
    table.string('thumbnail').defaultTo('');
    table.string('description').defaultTo('');
    table.string('language').defaultTo('');
    table.decimal('pageCount').defaultTo('');
    table.string('publisher').defaultTo('');
    table.float('amount').defaultTo('');
    table.string('previewLink').defaultTo('');
    table.string('infoLink').defaultTo('');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorite_books');
};