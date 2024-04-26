import { IUsuario } from "../type/usuario";
import { IUsuarioLogin } from '../dto/usuarioLogin';
import usuarioRepository from '../repository/usuario.repository';
import jwt from 'jsonwebtoken'
import { configServidor } from "../configServidor";

class usuarioService {
    

    async cadastroUsuario(usuario: IUsuario) {
        const novoUsuario = await usuarioRepository.cadastro(usuario)
        
        return novoUsuario
    }


    async login(usuario: IUsuarioLogin) {
        const _usuario = await usuarioRepository.login(usuario)
        const idUsuario = _usuario!.id
        const token = jwt.sign({ idUsuario }, configServidor.SECRET_KEY!)

        return token
    }
}
export default new usuarioService()