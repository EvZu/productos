const express = require('express')
const body_parser = require('body-parser')
const cors =require('cors')
const res = require('express/lib/response')
const app = express()


app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())
app.use(cors());

const db_manager = require('./persistence/dbmanager')

//CRUD//
/// CREATE--POST

app.post('/productos',(req,res) => {
    db_manager.productos_create(req,res)
})

/// READ--GET
app.get('/productos',(req,res) => {
    db_manager.productos_read(req,res)
})


/// UPDATE--PUT
app.put('/productos',(req,res) => {
    db_manager.productos_update(req,res)
})

/// DELETE-- DELETE
app.delete('/productos',(req,res) => {
    db_manager.productos_delete(req,res)
})




app.get('/',(req,res) =>  {
res.send("HOLA MUNDO")

})
app.listen(8985,() => {
    console.log("API REST is running 8985 !!!!!")
})