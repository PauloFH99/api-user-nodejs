import createConnection from '../../src/database';
import { getConnection } from 'typeorm';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { UpdateUserController } from '../../src/controllers/UpdateUserController';
import { FakeData } from '../utils/FakeData';

describe('UpdateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.query('DELETE FROM usuarios')
        connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar status 204 quando usuário for editado', async () => {
        
        const mockUser = await fakeData.createUser()
        
        const updateUserController = new UpdateUserController()

        const request = {
            body: {
                id: mockUser.id,
                name: 'Outro nome',
                email: 'email@email.com.br'
            }
        } as Request

        const response = makeMockResponse();

        await updateUserController.handle(request, response)

        expect(response.state.status).toBe(204)
    })

    it('Deve retornar status 400 quando o id não for informado', async() => {
        const mockUser = await fakeData.createUser()
        
        const updateUserController = new UpdateUserController()

        const request = {
            body: {
                id: '',
                name: 'Outro nome',
                email: 'email@email.com.br'
            }
        } as Request

        const response = makeMockResponse();

        await updateUserController.handle(request, response)

        expect(response.state.status).toBe(400)
    })

    it('Deve retornar status 400 quando o nome não for informado', async() => {
        const mockUser = await fakeData.createUser()
        
        const updateUserController = new UpdateUserController()

        const request = {
            body: {
                id: mockUser.id,
                name: '',
                email: 'email@email.com.br'
            }
        } as Request

        const response = makeMockResponse();

        await updateUserController.handle(request, response)

        expect(response.state.status).toBe(400)
    })

    it('Deve retornar status 400 quando o email não for informado', async() => {
        const mockUser = await fakeData.createUser()
        
        const updateUserController = new UpdateUserController()

        const request = {
            body: {
                id: mockUser.id,
                name: 'Outro nome',
                email: ''
            }
        } as Request

        const response = makeMockResponse();

        await updateUserController.handle(request, response)

        expect(response.state.status).toBe(400)
    })
})