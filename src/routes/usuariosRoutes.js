import express from 'express';
import UsuariosController from '../controllers/UsuarioController.js';

const router = express.Router()

router
    .get("/usuarios", UsuariosController.listarUsuarios)
    .get("/usuarios/busca", UsuariosController.listarUsuarioNome)
    .get("/usuarios/:id", UsuariosController.listarUsuarioId)
    .post("/usuarios", UsuariosController.cadastrarUsuario)
    .put("/usuarios/:id", UsuariosController.atualizarUsuario)
    .delete("/usuarios/:id", UsuariosController.deleteUsuario)
    