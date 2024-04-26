import { Document } from 'mongoose';
import { IUsuario } from '../type/usuario';
import usuariosSchema from "../schema/usuarios.schema";
import { DuplicatedContentError } from "../errors/duplicatedContentError";
import { IUsuarioLogin } from "../dto/usuarioLogin";
import { NotFoundError } from "../errors/notFoundError";
import bcrypt from 'bcrypt'
import { UnauthorizedError } from '../errors/unauthorizedError';

class usuarioRepository {

    async cadastro(usuario: IUsuario) {
        const _usuario = await usuariosSchema.findOne({ email: usuario.email })
        if (!_usuario) {
            const novoUsuario = {
                nome: usuario.nome,
                peso: usuario.peso,
                email: usuario.email,
                senha: await bcrypt.hash(usuario.senha, 10)
            }
            return await usuariosSchema.create(novoUsuario)
        }
        throw new DuplicatedContentError('email já está cadastrado!')

    }

    async login(usuario: IUsuarioLogin) {
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