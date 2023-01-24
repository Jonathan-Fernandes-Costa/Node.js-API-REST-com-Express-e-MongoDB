import express from 'express';
import produtos from './produtosRoutes.js';
import usuarios from './usuariosRoutes.js';
import vendedores from './vendedoresRoutes.js';
import pedidos from './pedidoRoutes.js';
const routes = (app) =>{
    app.route("/").get((req, res) => {
        res.status(200).send("Projeto Api CRUD REST")
    })

    app.use(
        express.json(),
        produtos,
        usuarios,
        vendedores,
        pedidos
    )
}

export default routes