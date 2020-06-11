const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')
const welcomeRouter = require('./welcome/welcome')
const userRouter = require('./users/userRouter')
// const blocker = require('./middleware/no-request')

const server = express()
const port = 4000

// This is express built-in middleare
server.use(express.json())

// cors is third-party middleware to handle cross-origin resource sharing
server.use(cors())

// Add my custom middleware
server.use(logger('long'))
// server.use(blocker())

server.use('/', welcomeRouter)
server.use('/users', userRouter)
server.use('/users/:id/posts', postRouter)

server.use((req, res) => {
	res.staus(404).json({
		message: 'Route not found',
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
