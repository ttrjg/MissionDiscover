const express = require('express')
const questionCrontroller = require('./controllers/questionCrontroller')
const RoomController = require('./controllers/RoomController')

const route = express.Router()
route.get('/', (req, res) => res.render('index', { page: 'enterRoom' }))
route.get('/create', (req, res) => res.render('index', { page: 'createRoom' }))

route.post('/createPass', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)


route.post('/question/create/:room', questionCrontroller.create)
route.post('/question/:room/:question/:action', questionCrontroller.index)


module.exports = route