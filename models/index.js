const mongoose = require('mongoose')
const itemSchema = require('./Item')

const Item = mongoose.model('Item', itemSchema)

module.exports = {
  Item
}
