import { Document } from 'mongoose';
import { error } from "console";
import { IUsuario } from '../type/usuario';
import usuariosSchema from "../schema/usuarios.schema";
import { DuplicatedContentError } from "../errors/duplicatedContentError";
import { IUsuarioLogin } from "../dto/usuarioLogin";
import { NotFoundError } from "../errors/notFoundError";
import bcrypt from 'bcrypt'
import { UnauthorizedError } from "../errors/UnauthorizedError";

class usuarioRepository {

    async cadastro(usuario: IUsuario) {
        const _usuario = await usuariosSchema.findOne({ email: usuario.email })
        if (_usuario) {
            throw new DuplicatedContentError('email já está cadastrado!')
        }
        const novoUsuario = await usuariosSchema.create(usuario)
        return novoUsuario
    }

    async login(usuario: IUsuarioLogin): Promise<Document> {
        const _usuario = await usuariosSchema.findOne({ email: usuario.email })
        if (!_usuario) {
            throw new NotFoundError('Usuario não encontrado. Por favor, realize o cadastro')
        }
        const usuarioValidado = await bcrypt.compare(usuario.senha, _usuario.senha)
        if (usuarioValidado) {
            return _usuario
        }
        throw new UnauthorizedError('Credenciais incorretas')
    }
}

export default new usuarioRepository()