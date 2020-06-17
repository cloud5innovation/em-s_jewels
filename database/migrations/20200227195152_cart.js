
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cart', cart => {
        cart.increments()
        cart
          .string('firebase_id')
          .unsigned()
          .notNullable()
          .references('firebase_id')
          .inTable('users')
          .unique()
        cart.integer('quantity').defaultTo(0)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cart')
  };
