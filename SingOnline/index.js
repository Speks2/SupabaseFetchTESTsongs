import express from 'express' 
import { supabase } from './config/config.supabase.js'
const port = 4000
const app = express()

app.get('/', async (req, res)=>{
    const {data, error} = await supabase
    .from('Songs')
    .select('title')
    if(error) {
        console.error(error)
    } else {
        console.log(data)
    }
   
    
    res.send('Welcome')

})

app.listen(port, ()=> {
    console.log(`server runs at http://localhost:${port}`)
})

