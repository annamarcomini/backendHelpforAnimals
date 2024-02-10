
exports.up = function(knex) {
  return knex.schema.createTable("incidents", function (table) {
    table.increments();

    table.string("title").notNullable(); //n pode fazer uma ong sem nome
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string('ong_id').notNullable();// armazanar qual ong criou o incidente de acordo com seu id de 'ongs'

    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
 
};
