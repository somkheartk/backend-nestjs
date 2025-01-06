import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('hello')
    getHello(): string {
        return this.userService.getHello();
    }
    @Get("users")
    getUsers(): string[] {
        return this.userService.getUsers();
    }
}
