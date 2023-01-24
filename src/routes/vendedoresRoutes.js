import express from 'express';
import VendedoresController from '../controllers/vendedorController.js';

const router = express.Router()

router
    .get("/vendedores", VendedoresController.listarVendedores)
    .get("/vendedores/busca", VendedoresController.listarVendedorNome)
    .get("/vendedores/:id", VendedoresController.listarVendedorId)
    .post("/vendedores", VendedoresController.cadastrarVendedor)
    .put("/vendedores/:id", VendedoresController.atualizarVendedor)
    .delete("/vendedores/:id", VendedoresController.deleteVendedor)
    
export default router