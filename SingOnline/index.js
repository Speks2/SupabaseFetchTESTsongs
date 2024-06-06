import express from 'express' 
import { SongController } from './Controllers/song.controller.js'; 
const port = 5000
const app = express()


app.use(SongController) 

app.listen(port, ()=> {
    console.log(`server runs at http://localhost:${port}`)
})
