import express from 'express'
import {route} from './src/routes/menu.js'
const PORT = 3000
const app = express()

app.use('/api/v1',route)

app.use((err,req,res,next)=>{    
    return res.status(500).send('Error')
})


app.listen(PORT,()=>console.log('Server Is Running....'))