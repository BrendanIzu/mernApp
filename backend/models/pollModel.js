const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pollSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  options: [{
    content: String,
    status: String,
    votes: Number,
  }],
  comments: [{
    user: String,
    content: String,
    likes: Number,
    dislikes: Number
  }]
}, { timestamps: true })

module.exports = mongoose.model('Poll', pollSchema)


