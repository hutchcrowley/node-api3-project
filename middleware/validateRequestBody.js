// custom middleware for validating request body
module.exports = validateBody

const validateBody = () => {
	return (req, res, next) => {
		if (!req.body.name || !req.body.email) {
			res.status(400).json({
				message: 'Missing user name or eamil',
			})
		} else {
			next()
		}
	}
}
