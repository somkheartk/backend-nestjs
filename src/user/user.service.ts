import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getHello(): string {
        return 'users Hello World!';
    }
    getUsers(): string[] {
        return ['User1', 'User2', 'User3'];
    }
}
