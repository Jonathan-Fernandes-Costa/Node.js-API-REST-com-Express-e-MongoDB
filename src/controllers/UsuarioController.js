import usuarios from "../models/Usuario.js"

class UsuariosController {
    //READ
    static listarUsuarios = (req, res) => {
        usuarios.find()
            .exec((err, usuarios) => {
                res.status(200).json(usuarios)
            })
    }
    static listarUsuarioId = (req, res) => {
        const id = req.params.id
        usuarios.findById(id)
            .exec((err, usuarios) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Usuario não encontrado` })
                } else {
                    res.status(200).json(usuarios)
                }
            })
    }
    static listarUsuarioNome = (req, res) => {
        const nome = req.query.nome
        usuarios.find({ "nome": nome })
            .exec((err, usuarios) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Usuario não encontrado` })
                } else {
                    res.status(200).json(usuarios)
                }
            })
    }
    //POST
    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios(req.body)
        usuario.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar Usuario` })
            } else {
                res.status(201).send(usuario.toJSON())
            }
        })
    }
    //UPDATE
    static atualizarUsuario = (req, res) => {
        const id = req.params.id
        usuarios.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao atualizar Usuario` })
            } else {
                res.status(200).send("Usuario atualizado com sucesso")
            }
        })
    }


    //DELETE
    static deleteUsuario = (req, res) => {
        const id = req.params.id
        usuarios.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Usuario não encontrado` })

            } else {
                res.status(200).send("Usuario deletado com sucesso")
            }
        })
    }
}
export default UsuariosController