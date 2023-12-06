import express from 'express'
import {route as routeMenu} from './routes/menu.js'
import { route as routeWebHook } from './routes/webhook.js'

import cors from 'cors'
const PORT = 5000
const app = express()
app.use(cors({
    origin:'127.0.0.1:3000'
}))

app.use('/api/v1',routeMenu)
app.use('/api/v1/webhook',routeWebHook)



app.use((err,req,res,next)=>{    
    console.log(err)
    return res.status(500).send('Error')
})


app.listen(PORT)