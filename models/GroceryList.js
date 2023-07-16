const { Schema } = require('mongoose')
const Item = require('./itemSchema')

const groceryListSchema = new Schema({
  items: [{}]
})

module.exports = groceryListSchema
