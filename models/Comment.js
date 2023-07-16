const { Schema } = require('mongoose')
const userSchema = require('./User')

const commentSchema = new Schema({
  content: { type: String, required: true },
  user: { type: { userSchema }, required: true }
})
