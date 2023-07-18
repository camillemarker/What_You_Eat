const { Schema } = require('mongoose')
const itemSchema = require('./ListItem')

const groceryListSchema = new Schema({
  items: { type: [itemSchema], required: true }
})

module.exports = groceryListSchema
