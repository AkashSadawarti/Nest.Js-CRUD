/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user-service/user.service';
import { UserDto } from 'src/DTO/user.dto';

@Controller('/user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getUsers(){
       const response = await this.userService.getUsers();
       if(response){
         return response;
       }
       return 'No Data Found!'
    }

    // get by id with userID
    //here we used parseintpipe from validation controller which allows you to convert the datatype
    @Get('/:id')
    async getUserById(@Param('id',ParseIntPipe) id: number) {
        const response = await this.userService.getUserByID(id);
        if(response){
            return response;
        }
         return ' User Id not found'
    }

    // for requesting body @Req() req: Request import
    // We used body here as @body() can also be used in replace of req()
    //Simple post using body params
    // @Post()
    // postUser(@Body() body: Body): any {
    //     console.log(this.userService.createUser(body));
    //     return this.userService.createUser(body);
    // }

    // post controller using userdto
    @Post()
    async postUser(@Body() userDto: UserDto) {
       const response = await this.userService.createUser(userDto);
       if(response){
           console.log(response);
           return response;
       }
       return 'user registration failed'
    }

    // for requesting body @Req() req: Request && @Param() import for update
    @Put('/:id')
    updateUser(@Body() userDto: UserDto, @Param('id',ParseIntPipe)  id: number ): any {
        const response = this.userService.update(userDto,id)
        if(response){
            console.log(response);
            return response;
        }
        return 'user update failed'
        // console.log(this.userService.update(userDto, id));
        // return this.userService.update(userDto, id);
    }

    // async and await is required bacause it sends promise and to handle the error.
    // Delete by id with userID
    @Delete('/:id')
    async deleteUserById( @Param('id',ParseIntPipe)  id: number ) {
        const msg = 'user Id not found'
        const response = await this.userService.deleteUser(id)
        if(response){
            return response ;
        }
        return msg
    }
}
