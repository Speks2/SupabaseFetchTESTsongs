import express from 'express' 
const port = 4000
const app = express()

app.get('/',(req, res)=>{
    res.send('Welcome')
})

app.listen(port, ()=> {
    console.log(`server runs at http://localhost:${port}`)
})

