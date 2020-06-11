const db = require('../data/dbConfig.js')

function get(query = {}) {
	const { page = 1, limit = 100, sortBy = 'id', sortDir = 'asc' } = query
	const offset = limit * (page - 1)
	return db('users').orderBy(sortBy, sortDir).limit(limit).offset(offset).select()
}

function getById(id) {
	return db('users').where({ id }).first()
}

function getUserPosts(userId) {
	return db('posts as p')
		.join('users as u', 'u.id', 'p.user_id')
		.select('p.id', 'p.text', 'u.name as postedBy')
		.where('p.user_id', userId)
}

function insert(user) {
	return db('users').insert(user).then(ids => {
		return getById(ids[0])
	})
}

async function update(id, changes) {
	await db('users').where({ id }).update(changes)

	return getById
}

function remove(id) {
	return db('users').where('id', id).del()
}

module.exports = {
	get,
	getById,
	getUserPosts,
	insert,
	update,
	remove,
}
