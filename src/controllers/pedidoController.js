import pedidos from "../models/Pedido.js"

class PedidosController {
    //READ
    static listarPedidosUser = (req, res) => {
        const compradorid = req.params.compradorid
        console.log(compradorid)
        pedidos.find({ compradorid: compradorid })
            .populate("vendedorid", "nome")
            .populate("produtoid")
            .exec((err, pedidos) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Pedido não encontrado` })
                } else {
                    res.status(200).json(pedidos)
                }
            })
    }
    static listarPedidosVendedor = (req, res) => {
        const vendedorid = req.params.vendedorid
        pedidos.find({ vendedorid: vendedorid })
            .populate("compradorid", "nome")
            .populate("produtoid")
            .exec((err, pedidos) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Pedido não encontrado` })
                } else {
                    res.status(200).json(pedidos)
                }
            })
    }
    //POST
    static cadastrarPedido = (req, res) => {
        let pedido = new pedidos(req.body)
        pedido.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar pedido` })
            } else {
                res.status(201).send(pedido.toJSON())
            }
        })
    }
    //UPDATE
    static atualizarPedido = (req, res) => {
        const id = req.params.id
        pedidos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao atualizar pedido` })
            } else {
                res.status(200).send("Pedido atualizado com sucesso")
            }
        })
    }


    //DELETE
    static deletePedido = (req, res) => {
        const id = req.params.id
        pedidos.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Pedido não encontrado` })

            } else {
                res.status(200).send("Pedido deletado com sucesso")
            }
        })
    }
}
export default PedidosController