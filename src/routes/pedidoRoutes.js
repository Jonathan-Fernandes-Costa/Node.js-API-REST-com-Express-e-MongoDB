import PedidosController from "../controllers/pedidoController.js";
import express from "express";

const router = express.Router();

router
    .get("/usuarios/pedidos/:compradorid", PedidosController.listarPedidosUser)
    .get("/vendedores/pedidos/:vendedorid", PedidosController.listarPedidosVendedor)
    .post("/usuarios/pedidos", PedidosController.cadastrarPedido)
    .put("/usuarios/pedidos/:id", PedidosController.atualizarPedido)
    .delete("/usuarios/pedidos/:id", PedidosController.deletePedido)
    .put("/vendedores/pedidos/:id", PedidosController.atualizarPedido)
    .delete("/vendedores/pedidos/:id", PedidosController.deletePedido)
export default router