const express = require('express')
const app = express()
const mongoose = require('mongoose');
const product = require('./models/productModels');
const port = 3000

//middileware 
app.use(express.json())


//routes 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//data base connection 

app.post('/products',async(req,res)=>{
    try{
        const prodcut = await product.create(req.body)
        res.status(200).json(prodcut)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error})
    }
})

mongoose.connect('mongodb+srv://admin:database-NodeAPI@database-nodeapi.g4rvu.mongodb.net/database-NodeAPI?retryWrites=true&w=majority&appName=database-NodeAPI')
.then(()=>{
    console.log('connected to database')
}).catch((error)=>{
    console.log(error)
})

//port running code 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})