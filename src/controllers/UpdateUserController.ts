import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';

class UpdateUserController{
    async handle(request: Request, response: Response){
        const updateUserService = new UpdateUserService();

        const { id, name, email } = request.body

        if(id.trim().length === 0){
            return response.status(400).json({mensagem: 'Id não informado'})
        }

        if(name.trim().length === 0){
            return response.status(400).json({mensagem: 'Informe um nome'})
        }

        if(email.trim().length === 0){
            return response.status(400).json({mensagem: 'Informe um email'})
        }

        await updateUserService.execute({ id, name, email })

        return response.status(204).json()
    }
}

export { UpdateUserController }