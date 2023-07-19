const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    savedRecipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    groceryList: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
  },
  { timestamps: true }
)

module.exports = userSchema
