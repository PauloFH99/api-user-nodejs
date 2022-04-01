import { CreateUserService } from '../../src/services/CreateUserService';
import { v4 as uuid } from 'uuid';

class FakeData{
    createUserService = new CreateUserService();

    async execute(){
        await this.createUserService.execute({
            id: uuid(),
            name: 'Algum usuario',
            email: 'algumusuario@gmail.com',
        })

        await this.createUserService.execute({
            id: uuid(),
            name: 'Outro usuario',
            email: 'outrousuario@gmail.com',
        })
    }

    async createUser(){
        const user = await this.createUserService.execute({
            id: uuid(),
            name: 'Algum usuario',
            email: 'algumusuario@gmail.com',
        })

        return user
    }
}

export { FakeData }