import express from 'express'
import { createTudo, deleteTudo, getAllTodo, getTudoById, updatetudo } from '../ControllerTodo/Todo.js'

export const Router = express.Router()

Router.post('/post',createTudo)
Router.get('/get',getAllTodo)
Router.get('/get/:id',getTudoById)
Router.delete('/deleted/:id',deleteTudo)
Router.put('/update/:id',updatetudo)