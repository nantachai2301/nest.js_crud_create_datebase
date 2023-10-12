import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User | null> {
    try {
      const user = await this.usersRepository.findOne({ where: { id: id } });
      return user || null;
    } catch (error) {
      // จัดการข้อผิดพลาดที่เกิดขึ้นในกรณีที่ไม่สามารถค้นหาผู้ใช้
      return null;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    try {
      const user = await this.usersRepository.findOne({ where: { id: id } });
      if (!user) {
        return null;
      }

      this.usersRepository.merge(user, updateUserDto);
      return this.usersRepository.save(user);
    } catch (error) {
      // จัดการข้อผิดพลาดที่เกิดขึ้นในกรณีที่ไม่สามารถค้นหาผู้ใช้
      return null;
    }
  }

  async remove(id: string): Promise<string> {
    try {
      await this.usersRepository.delete(id);
      return `User with ID ${id} has been deleted.`;
    } catch (error) {
      // จัดการข้อผิดพลาดที่เกิดขึ้นในกรณีที่ไม่สามารถลบผู้ใช้
      return `Unable to delete user with ID ${id}.`;
    }
  }
}
