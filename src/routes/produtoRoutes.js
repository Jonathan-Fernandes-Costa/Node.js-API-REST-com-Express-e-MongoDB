import ProdutosController from "../controllers/produtoController.js";
import express from "express";

const router = express.Router();

router
    .get("/produtos", ProdutosController.listarProdutos)
    .get("/produtos/busca", ProdutosController.listarProdutoNome)
    .get("/produtos/:id", ProdutosController.listarProdutoId)
    .post("/produtos", ProdutosController.cadastrarProduto)
    .put("/produtos/:id", ProdutosController.atualizarProduto)
    .delete("/produto/:id", ProdutosController.deleteProduto)

export default router