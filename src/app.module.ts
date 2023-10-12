import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity'; // เรียกใช้ Entity ของ "users"
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [User], // เพิ่ม Entity ของ "users" ที่นี่
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [], // เพิ่ม controllers ของคุณ
  providers: [], // เพิ่ม providers ของคุณ
})
export class AppModule {}
