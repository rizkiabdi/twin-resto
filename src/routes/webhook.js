import express from 'express'
import { webHook } from '../controllers/webhook.js'
export const route = express.Router()

route.post('/webhook',webHook)