import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import { Administrator } from 'src/admin/admin.entity';

@Module({
    imports:[TypeOrmModule.forFeature([User,Administrator])],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule {}
