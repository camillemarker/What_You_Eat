const { Schema } = require('mongoose')

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String
  }
})
