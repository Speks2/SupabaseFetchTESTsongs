import express from 'express' 
import { songmodel } from './models/song.model.js'
const port = 4000
const app = express()

app.get('/', async (req, res)=>{
const data = await songmodel.getAllRecords()
console.log(data)
})

app.listen(port, ()=> {
    console.log(`server runs at http://localhost:${port}`)
})

