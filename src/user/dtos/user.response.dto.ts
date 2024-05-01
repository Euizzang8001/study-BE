import {IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserEntity } from "src/entities";

export class UserResponseDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    image?: string;

    @IsDate()
    createAt: Date;

    constructor(userEntity: UserEntity){
        this.email = userEntity.email;
        this.name = userEntity.name;
        this.image = userEntity.image;
        this.createAt = userEntity.createdAt;
    }
}