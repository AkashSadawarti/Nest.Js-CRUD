/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/DTO/user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
//user service PROVIDES all business logic to controller i.e it is called provider


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    // getUsers() {
    //     return `Hello Bootcoding Students`;
    // }

    // with Repository code 
    getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    //here we used parsein controller which allows you to convert the datatype
    getUserByID(id: number) {
        // console.log(param);
        return this.userRepository.findOne({ where: { id } });
    }

    // for login
    getUserByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }

    //  with simple body 
    // createUser(body: any) {
    //     // console.log(req.body);
    //     return body;
    // }

    // with using user DTO
    createUser(userDto: UserDto) {
        // console.log(req.body);
        this.userRepository.save(userDto);
        return userDto;
    }

    update(userDto: UserDto, id: number) {
        // console.log({body: req.body} , param );
        // return { id, body: userDto };
        this.userRepository.update(id, userDto)
        return { id, body: userDto };
    }

    deleteUser( id: number ) {
        // const msg = "Id deleted successfully."
        // console.log(param);
        const response = this.userRepository.delete(id);
        return response;
    }


}
