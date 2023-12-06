import express from 'express'
import { webHook } from '../controllers/webhook.js'
import { parserJson } from '../middleware/body-parser.js'
export const route = express.Router()

route.post('/webhook',parserJson,webHook)