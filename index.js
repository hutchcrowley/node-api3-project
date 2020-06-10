const express = require('express')

const userRouter = require('./users/userRouter')
const postRouter = require('./posts/postRouter')
const logger = require('./middleware/logger')

const server = express()
const port = 4000

server.use(express.json())

server.use(userRouter)
server.use(postRouter)
server.use(logger('long'))

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
