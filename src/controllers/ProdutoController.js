import produtos from "../models/Produto.js"

class ProdutosController {
    static listarProdutos = (req, res) =>{
        produtos.find()
            .populate("vendedorid")
            .exec((err, produtos) => {
                res.status(200).json(produtos)
            })
    }
    static listarProdutoId = (req, res) => {
        const id = req.params.id
        produtos.findById(id)
            .populate("vendedorid")
            .exec((err, produtos) => {
                if(err){
                    res.status(400).send({message: `${err.message} - Produto não encontrado`})
                }else{
                    res.status(200).json(produtos)
                }
            })
    }
    static listarProdutoNome = (req, res) => {
        const nome = req.query.nome
        produtos.find({"nome": nome})
            .populate("vendedorid")
            .exec((err, produtos) =>{
                if(err){
                    res.status(400).send({message: `${err.message} - Produto não encontrado`})
                }else{
                    res.status(200).json(produtos)
                }
            })
    }
}
