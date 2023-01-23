import mongoose from "mongoose";
const produtoSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome: {type: String, required: true},
        categoria: {type: String, required: true},
        quantidade: {type: Number}
    }
)
const produtos = mongoose.model('produtos', produtoSchema)
export default produtos