import mongoose from "mongoose";
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://Projeto-Loja:projeto123@projeto-loja.zz1bz4i.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db