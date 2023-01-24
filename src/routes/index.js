import express from 'express';
import produtos from './produtosRoutes.js';
import usuarios from './usuariosRoutes.js';
import vendedores from './vendedoresRoutes.js';
const routes = (app) =>{
    app.route("/").get((req, res) => {
        res.status(200).send("Projeto Api CRUD REST")
    })

    app.use(
        express.json(),
        produtos,
        usuarios,
        vendedores
    )
}

export default routes