import express from 'express'
import { getMenu,getMenuByCategory } from '../controllers/menu.js'
export const route = express.Router()

route.get('/menu',getMenu,getMenuByCategory)
// route.get('/menu/:menu_name',getMenuByName)
