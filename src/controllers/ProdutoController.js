import produtos from "../models/Produto.js"

class ProdutosController {
    //READ
    static listarProdutos = (req, res) => {
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
                if (err) {
                    res.status(400).send({ message: `${err.message} - Produto não encontrado` })
                } else {
                    res.status(200).json(produtos)
                }
            })
    }
    static listarProdutoNome = (req, res) => {
        const nome = req.query.nome
        produtos.find({ "nome": nome })
            .populate("vendedorid")
            .exec((err, produtos) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Produto não encontrado` })
                } else {
                    res.status(200).json(produtos)
                }
            })
    }
    //POST
    static cadastrarProduto = (req, res) => {
        let produto = req.body
        produtos.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar produto` })
            } else {
                res.status(201).send(produto.toJSON())
            }
        })
    }
    //UPDATE
    static atualizarProduto = (req, res) => {
        const id = req.params.id
        produtos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao atualizar produto` })
            } else {
                res.status(200).send("Produto atualizado com sucesso")
            }
        })
    }


    //DELETE
    static deleteProduto = (req, res) => {
        const id = req.params.id
        produtos.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Produto não encontrado` })

            } else {
                res.status(200).send("Produto deletado com sucesso")
            }
        })
    }
}
export default ProdutosController