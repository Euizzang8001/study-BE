import { Injectable } from '@nestjs/common';
import {UserEntity} from 'src/entities';
import { UserRepository } from 'src/repositories';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getUsers(): Promise<UserEntity[]>{
        const users = this.userRepository.findAll();
        return users;
    }

    async findByEmail(email: string): Promise<UserEntity> {
        const user = this.userRepository.findByEmail(email);
        return user;
    }

    async addUser(info: UserEntity): Promise<UserEntity>{
        const newUser = await this.userRepository.create(info);
        return newUser;
    }

    async deleteUser(email: string): Promise<void>{
        await this.userRepository.deleteByEmail(email);
    }

    async updatePassword(email: string, password: string): Promise<void> {
        await this.userRepository.updatePassword(email, password);
    }
}
