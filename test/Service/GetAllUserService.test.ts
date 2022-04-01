import { getConnection } from 'typeorm';
import createConnection from '../../src/database';
import { GetAllUserService } from '../../src/services/GetAllUserService';
import { FakeData } from '../utils/FakeData';

describe('GetAllUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
        await connection.query('DELETE FROM usuarios')
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar todos os usuários cadastrados', async()=> {

        await fakeData.execute()

        const expectedResponse = [
            {
                name: 'Algum usuario',
                email: 'algumusuario@gmail.com',
            },
            {
                name: 'Outro usuario',
                email: 'outrousuario@gmail.com'
            }
        ]

        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse)
    })
})