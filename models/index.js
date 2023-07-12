const mongoose = require('mongoose')
const itemSchema = require('./ListItem')
const userSchema = require('./User')

const Item = mongoose.model('Item', itemSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  Item,
  User
}
