const { Schema } = require('mongoose')

const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String }
})

module.exports = itemSchema
