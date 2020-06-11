module.exports = () => {
	return (req, res, next) => {
		//   a string that identifies what software the client is using
		const agent = req.headers('user-agent')
		if (/insomnia/i.test(agent)) {
			return res.status(418).json({
				message: 'No using Insomnia',
			})
		}
		next()
	}
}
