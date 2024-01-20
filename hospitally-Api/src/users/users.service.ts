import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { UpdateAddressDto } from  './dto/update-address.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const oldUser = await this.findByEmail(createUserDto.email);
    if (oldUser) {
      return new HttpException('email already in use', 422);
    }
    const user = new User();
    user.fullname = createUserDto.fullname;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    await user.save();
    return user;
  }

  async showById(id: number): Promise<User> {
    const user = await this.findById(id);

    delete user.password;
    return user;
  }

  async update(user: User) {
    const updateUser = await this.userRepository.update(user.id, user);
    if (updateUser.affected == 1) {
      return this.findById(user.id);
    }
    return false;
  }

  async findById(id: number) {
    return await this.userRepository.findOneByOrFail({
      id: id,
    });
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }

  async searchNearBy() {
    return await User.find({
      order: {
        id: 'DESC',
      },
    });
  }
}
