import PedidosController from "../controllers/pedidoController.js";
import express from "express";

const router = express.Router();

router
    .get("/usuario/:compradorid", PedidosController.listarPedidosUser)
    .get("/vendedor/:vendedorid", PedidosController.listarPedidosVendedor)
    .post("/usuario", PedidosController.cadastrarPedido)
    .put("/usuario/:id", PedidosController.atualizarPedido)
    .delete("/usuario/:id", PedidosController.deletePedido)
    .put("/vendedor/:id", PedidosController.atualizarPedido)
    .delete("/vendedor/:id", PedidosController.deletePedido)
export default router