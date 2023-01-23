import mongoose from "mongoose";
const vendedorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        endereço: {type: String, required: true}
    }
)
const vendedores = mongoose.model('vendedores', vendedorSchema)
export default vendedores;