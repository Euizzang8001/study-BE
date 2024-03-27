import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    users: string[] = ['KYJ', 'LJW', 'KHS'];

    getUsers(): string[]{
        return this.users;
    }

    async addUser(name: string): Promise<string[]> { //비동기의 경우 당장 자료형을 확정할 수 없음 -> Promise를 추가하여 작성
        if(!this.users.includes(name)) {
            await this.users.push(name); //내가 name을 넣어줄 때까지 기다려야 함 -> await 작성
        }
        return this.users;
    }

    async deleteUser(name: string): Promise<string[]> {
        if (this.users.includes(name)){
            await this.users.splice(this.users.indexOf(name), 1);
        }
        return this.users;
    }

    getUserName(index:number): string{
        return this.users[index];
    }
}
