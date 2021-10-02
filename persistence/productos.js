var mongoose = require ("mongoose")
var Schema = mongoose.Schema;

var ProductosSchema = new Schema({
    codigo: {type:String, required:true,max:50},
    nombre: {type:String, required:true},
	precio: {type:String, required:true},
    existencias: {type:String, required:true}
})

module.exports = mongoose.model('Productos', ProductosSchema);