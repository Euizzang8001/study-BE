import { Controller, Get, Post, Body, Delete, Put} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/entities';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { UserRepository } from 'src/repositories';
import { UserResponseDto } from './dtos/user.response.dto';
import { EmailRequestDto, PasswordRequestDto, UserRequestDto } from './dtos/user.request.dto';
import { UseFilters } from '@nestjs/common';


@Controller('user')
@UseFilters(HttpExceptionFilter)
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async getUsers(): Promise<UserResponseDto[]>{
        return this.userService.getUsers();
    }

    @Post()
    async addUser(@Body() body: UserRequestDto): Promise<UserResponseDto>{
        return this.userService.addUser(body);
    }

    @Delete()
    deleteUser(@Body() body: EmailRequestDto): Promise<void>{
        return this.userService.deleteUser(body);
    }

    @Get('/find')
    async findByEmail(@Body() body: EmailRequestDto): Promise<UserResponseDto>{
        return this.userService.findByEmail(body);
    }

    @Put('/password')
    updatePassword(@Body() body: PasswordRequestDto): Promise<void>{
        return this.userService.updatePassword(body);
    }
}