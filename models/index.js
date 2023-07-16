const mongoose = require('mongoose')
const itemSchema = require('./ListItem')
const userSchema = require('./User')
const recipeSchema = require('./Recipe')

const Item = mongoose.model('items', itemSchema)
const User = mongoose.model('User', userSchema)
const Recipe = mongoose.model('Rcipe', recipeSchema)

module.exports = {
  Item,
  User,
  Recipe
}
