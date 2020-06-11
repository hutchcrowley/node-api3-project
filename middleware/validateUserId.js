// custom middleware for validating user ID

module.exports = validateUserId

const validateUserId = () => {
	return (req, res, next) => {
		users
			.findById(req.params.id)
			.then(user => {
				if (user) {
					// make the user object available to later middleware
					req.user = user

					// middleware did what it was supposed to do (validate the user)
					// move on to the next piece of middleware
					next()
				} else {
					// if you want to tcancel the request from middleware, just dont call next
					res.status(404).json({
						message: 'User not found',
					})
				}
			})
			.catch(err => next(err))
	}
}
