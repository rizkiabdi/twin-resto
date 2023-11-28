import express from 'express'
import { getMenu,getMenuByCategory } from '../controllers/menu.js'
export const route = express.Router()

route.get('/menu',getMenuByCategory)

