const express = require('express')
const {getPolls, getPoll, createPoll, deletePoll, updatePoll} = require('../controllers/pollController')

const router = express.Router()

// GET all polls
router.get('/', getPolls)

// GET a single poll
router.get('/:id', getPoll)

// POST  a new poll
router.post('/new', createPoll)

// DELETE a poll
router.delete('/:id', deletePoll)

// UPDATE a poll
router.patch('/:id', updatePoll)

module.exports = router