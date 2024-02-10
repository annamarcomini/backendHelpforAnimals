
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
   table.string('id').primary();
   table.string('name').notNullable(); //n pode fazer uma ong sem nome
   table.string("email").notNullable();
   table.string("whatsapp").notNullable();
   table.string("city").notNullable();
   table.string("uf",2).notNullable(); //2 caracteres só
  })
}; //oque acontece se eu executar a migration

exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};
