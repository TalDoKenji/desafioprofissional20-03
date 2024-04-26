import { ObjectId } from 'mongoose';
import { Request, Response } from "express";
import categoriaService from "../service/categoria.service";
import { IAuthenticatedRequest } from '../type/AuthenticatedRequest';
class categoriaController {

    async criaCategoria(req: Request, res: Response) {
        const novaCategoria = await categoriaService.criaCategoria(req.body)
        return res.status(201).json(novaCategoria)
    }

    async buscaCategoria(req: Request, res: Response) {
        const categoria = await categoriaService.buscaCategoria(req.params.id)
        return res.status(200).json(categoria)
    }

    async buscaCategoriaPorUsuario(req: Request, res: Response) {
        const categoria = await categoriaService.buscaCategoriasPorUsuario(req.params.id)
        return res.status(200).json(categoria) 
    }

    async atualizaCategoria(req: Request, res: Response) {
        const categoriaAtualizada = await categoriaService.atualizaCategoria(req.params.id, req.body)
        return res.status(200).json(categoriaAtualizada) 
    }

    async deletaCategoria(req:Request,res:Response) {
        await categoriaService.deletaCategoria(req.params.id)
        return res.status(204).json()
    }

}

export default new categoriaController()