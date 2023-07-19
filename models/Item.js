const { Schema } = require('mongoose')

const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = itemSchema
