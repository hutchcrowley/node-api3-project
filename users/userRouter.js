const express = require('express')
const router = express.Router()
const user = require('./userDb')

router.get('/', (req, res) => {
	user
		.get()
		.then(user => {
			res.status(200).json(user)
		})
		.catch(err => {
			console.log('Error: ', err)
			res.status(404).json({
				message: 'User not found',
			})
		})
})

router.get('/:id', (req, res) => {
	users
		.findById(req.params.id)
		.then(user => {
			if (user) {
				res.status(200).json(user)
			} else {
				res.status(404).json({
					message: 'User not found',
				})
			}
		})
		.catch(err => {
			console.log('Error: ', err)
			res.statu(500).json({
				message: 'Error retrieving the user',
			})
		})
})

router.post('/', (req, res) => {
	// do your magic!
})

router.post('/:id/posts', (req, res) => {
	// do your magic!
})

router.get('/:id/posts', (req, res) => {
	// do your magic!
})

router.delete('/:id', (req, res) => {
	// do your magic!
})

router.put('/:id', (req, res) => {
	// do your magic!
})

//custom middleware

function validateUserId(req, res, next) {
	// do your magic!
}

function validateUser(req, res, next) {
	// do your magic!
}

function validatePost(req, res, next) {
	// do your magic!
}

module.exports = router
