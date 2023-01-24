import mongoose from "mongoose";
const pedidoSchema = new mongoose.Schema(
    {
        id:{type: String},
        produtoid: {type: mongoose.Schema.Types.ObjectId, ref: "produtos", required: true},
        compradorid: {type: mongoose.Schema.Types.ObjectId, ref: "usuarios", required: true},
        vendedorid: {type: mongoose.Schema.Types.ObjectId, ref: "vendedores", required: true},
        quantidade: {type: Number}
    }
)
const pedidos = mongoose.model('pedidos', pedidoSchema)
export default pedidos