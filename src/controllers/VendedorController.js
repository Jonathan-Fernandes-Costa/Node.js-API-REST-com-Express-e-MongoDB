import vendedores from "../models/Vendedor.js"

class VendedoresController {
    //READ
    static listarVendedores = (req, res) => {
        vendedores.find()
            .exec((err, vendedores) => {
                res.status(200).json(vendedores)
            })
    }
    static listarVendedorId = (req, res) => {
        const id = req.params.id
        vendedores.findById(id)
            .exec((err, vendedores) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Vendedor não encontrado` })
                } else {
                    res.status(200).json(vendedores)
                }
            })
    }
    static listarVendedorNome = (req, res) => {
        const nome = req.query.nome
        vendedores.find({ "nome": nome })
            .exec((err, vendedores) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Vendedor não encontrado` })
                } else {
                    res.status(200).json(vendedores)
                }
            })
    }
    //POST
    static cadastrarVendedor = (req, res) => {
        let vendedor = req.body
        vendedores.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar Vendedor` })
            } else {
                res.status(201).send(vendedor.toJSON())
            }
        })
    }
    //UPDATE
    static atualizarVendedor = (req, res) => {
        const id = req.params.id
        vendedores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao atualizar Vendedor` })
            } else {
                res.status(200).send("Vendedor atualizado com sucesso")
            }
        })
    }


    //DELETE
    static deleteVendedor = (req, res) => {
        const id = req.params.id
        vendedores.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Vendedor não encontrado` })

            } else {
                res.status(200).send("Vendedor deletado com sucesso")
            }
        })
    }
}
export default VendedoresController