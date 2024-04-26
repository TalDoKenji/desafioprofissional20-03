import { error } from 'console';
import { configServidor } from './../configServidor';
import { UnauthorizedError } from './../errors/unauthorizedError';
import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { IAuthenticatedRequest } from '../type/AuthenticatedRequest';
import { IJWTData } from '../type/IJWT';

class AuthenticationMiddleare {

    static authenticateToken(req: IAuthenticatedRequest, res: Response, next: NextFunction) {

        const tokenHeader = req.headers.authorization;

        const token = tokenHeader!.split(' ')[1]
        try {
            const { usuarioId } = jwt.verify(token, configServidor.SECRET_KEY!) as IJWTData
            req.userId = usuarioId
            next()
        } catch (error) {
            throw new UnauthorizedError('Acesso não autorizado. Revise o token inserido')
        }
    }


}
export default AuthenticationMiddleare