import PedidosController from "../controllers/pedidoController.js";
import express from "express";

const router = express.Router();

router
    .get("/usuarios/pedidos/:compradorid", PedidosController.listarPedidosUser)
    .get("/vendedores/pedidos/:vendedorid", PedidosController.listarPedidosVendedor)
    .post("/usuarios/pedido", PedidosController.cadastrarPedido)
    .put("/usuarios/pedido/:id", PedidosController.atualizarPedido)
    .delete("/usuarios/pedido/:id", PedidosController.deletePedido)
    .put("/vendedores/pedido/:id", PedidosController.atualizarPedido)
    .delete("/vendedores/pedido/:id", PedidosController.deletePedido)
export default router