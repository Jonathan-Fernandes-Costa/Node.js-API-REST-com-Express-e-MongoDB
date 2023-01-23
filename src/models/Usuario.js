import mongoose from "mongoose";
const usuarioSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    endereço: {type: String, required: true},
    telefone: {type: String, required: true},
    email: {type: String, required: true},
    cpf: {type: String, required:true}
})

const usuarios = mongoose.model('usuarios', usuarioSchema)
export default usuarios