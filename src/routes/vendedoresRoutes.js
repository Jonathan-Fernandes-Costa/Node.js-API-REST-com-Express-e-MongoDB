import express from 'express';
import VendedoresController from '../controllers/vendedorController.js';

const router = express.Router()

router
    .get("/usuarios", VendedoresController.listarUsuarios)
    .get("/usuarios/busca", VendedoresController.listarUsuarioNome)
    .get("/usuarios/:id", VendedoresController.listarUsuarioId)
    .post("/usuarios", VendedoresController.cadastrarUsuario)
    .put("/usuarios/:id", VendedoresController.atualizarUsuario)
    .delete("/usuarios/:id", VendedoresController.deleteUsuario)
    