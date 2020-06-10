//  Build custom middleware function logger. Takes request object as a parameter, and returns some console.logs with info about the request.

module.exports = format => {
	return (req, res, next) => {
		switch (format) {
			case 'short':
				console.log(`${Date.now()} ${req.method} ${req.url}`)
				break
			case 'long':
			default:
				// Create a new time/date with no timezone
				const time = new Date().toISOString()
				// Log out info from request object
				console.log(`[${time}] ${req.ip} ${req.method} ${req.url}`)
		}
		// go to next middleware function
		next()
	}
}
