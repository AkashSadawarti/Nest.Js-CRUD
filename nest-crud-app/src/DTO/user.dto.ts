/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from "class-validator"


export class UserDto {

    @IsString()
    name : string;

    @IsString()
    surname : string;

    @IsEmail()
    email : string;
  
    @IsString()
    password : string

}