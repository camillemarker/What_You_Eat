const mongoose = require('mongoose')
const itemSchema = require('./ListItem')

const Item = mongoose.model('Item', itemSchema)

module.exports = {
  Item
}
