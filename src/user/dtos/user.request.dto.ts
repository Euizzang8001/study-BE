import { PickType } from '@nestjs/mapped-types';
import {IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserRequestDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional() //값이 존재할 수도 있는데 존재하면 아래 조건에 맞게
    @IsString()
    image?: string;
}

export class EmailRequestDto extends PickType(UserRequestDto, ['email'] as const) {}

export class PasswordRequestDto extends PickType(UserRequestDto, ['email', 'password'] as const) {}