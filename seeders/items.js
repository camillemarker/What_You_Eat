const mongoose = require('mongoose')
const falso = require('@ngneat/falso')
const { Item } = require('../models')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const createItems = async () => {
  let items = [...Array(10)].map((item, idx) => ({
    name: falso.commerce.productName().toString(),
    quantity: falso.random.number({ min: 1, max: 20 }).toString()
  }))

  await Item.deleteMany({})
  console.log('Creating items . . .')
  await Item.insertMany(items)
  console.log('Items created!')

  mongoose.connection.close()
}

createItems()
