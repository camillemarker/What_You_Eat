const { Schema } = require('mongoose')
const groceryListSchema = require('./GroceryList')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    savedRecipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }]
  },
  { timestamps: true }
)

module.exports = userSchema
