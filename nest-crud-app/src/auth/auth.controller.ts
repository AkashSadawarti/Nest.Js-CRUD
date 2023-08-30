/* eslint-disable prettier/prettier */
import { Request, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthServiceService } from 'src/service/auth-service/auth-service.service';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthServiceService) { }

    //while we using passport we dont need to user auth service instead use
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req: any) {
        return this.authService.login(req.user);

    }
}
