
import { hashPW } from './userAction';



import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import { App } from '@/app';
import { CreateUserDto } from '@dtos/users.dto';
import { UserRoute } from '@routes/users.route';

afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Test-hash-md5', () => {

    describe('[DELETE] /users/:id', () => {
        it('testa200', async () => {
            // hash 200 should be 95793DFC73553A12F1856E62D39AE1A8
            let p = hashPW("200")
            expect(p).toBe("95793DFC73553A12F1856E62D39AE1A8")
        });
    });
});
