var mongoose = require('mongoose');
const productos = require('./productos');
var dev_db_url ="mongodb://localhost:27017/everdb";
var mongoDB =  process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser:true, useUnifiedTopology:true   });

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB conectionerro:'));

var Productos = require ('./productos');

////////////////////////// CRUD OPERATION ///////////////////
////////CREATE
exports.productos_create = function(req,res){
var  productos = new Productos({
    codigo: req.body.codigo,
    nombre: req.body.nombre,
	precio: req.body.precio,
    existencias: req.body.existencias

});
productos.save(function(err){
    if(err){
        return next(err)
    }
res.send({'message':'ok'})

})

}


////////READ
exports.productos_read = function(req,res){
    productos.findById(req.query.id, function(err,productos){
        if(err) return next(err)
        res.send(productos)
    })
}
////////UPDATE
exports.productos_update = function(req,res){


    exports.productos_update = function(req,res){
        productos.findByIdAndUpdate(req.query.id, {$set:req.body}, function(err,productos){
            if(err) return next(err)
            res.send({'message':"UPDATE"})
        })
    }



}
////////delete
exports.productos_delete = function(req,res){
    
    productos.findByIdAndRemove(req.query.id,function(err,productos){
        if(err) return next(err)
        res.send({'message':"DELETE"})

    }
    
    
    )



}