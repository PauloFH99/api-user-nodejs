import { getRepository } from 'typeorm';
import { Usuario } from '../entities/User';

interface IUsuario {
    id: string,
    name: string,
    email?: string
}

class CreateUserService {
    async execute({ id, name, email }:IUsuario){
        
        const usuario = await getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
                {
                    id: id,
                    name: name,
                    email: email
                }
            ])
            .execute();

        return usuario.identifiers[0]
    }
}

export { CreateUserService }