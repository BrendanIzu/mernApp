const Poll = require('../models/pollModel')
const mongoose = require('mongoose')

// get all polls
const getPolls = async (req, res) => {
  const polls = await Poll.find({}).sort({createdAt: -1})
  
  res.status(200).json(polls)
}

// get a single poll
const getPoll = async (req, res) => {
  const { id } = req.params
  
  // check id is valid mongoose id format before looking in database
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Poll not found'})
  }
  
  const poll = await Poll.findById(id)
  
  if (!poll) {
    return res.status(404).json({error: 'Poll not found'})
  }
  
  res.status(200).json(poll)
} 

// create a new poll
const createPoll = async (req, res) => {
  const {title, options} = req.body
  
  // add doc to db
  try {
    const poll = await Poll.create({title, options})  
    res.status(200).json(poll)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a poll
const deletePoll = async (req, res) => {
  const { id } = req.params
  
  if (!mongoose.Type.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Poll not found'}) 
  }
  
  const poll = await Poll.findOneAndDelete({_id: id})
  
  if (!poll) {
    return res.status(404).json({error: 'Poll not found'})
  }
  
  res.status(200).json(poll)
}

// update a poll
const updatePoll = async (req, res) => {
  const { id } = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Poll not found'})
  }
  
  const poll = await Poll.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  
  if (!poll) {
    return res.status(404).json({error: 'Poll not found'})
  }
  
  res.status(200).json(poll)
}

module.exports = {
  getPolls, getPoll, createPoll, deletePoll, updatePoll
}