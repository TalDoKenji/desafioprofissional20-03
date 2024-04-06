import { Request, Response } from "express";
import usuarioService from "../service/usuarios.service";

class usuarioController {

    async cadastroUsuario(req: Request, res: Response) {

        const novoUsuario = await usuarioService.cadastroUsuario(req.body)
        return res.status(201).json(novoUsuario)
    }

    async login(req:Request,res:Response) {
        const usuario = await usuarioService.login(req.body)
        res.setHeader('Authorization', `Bearer ${usuario}`)
        res.status(200).json()
    }

}

export default new usuarioController()