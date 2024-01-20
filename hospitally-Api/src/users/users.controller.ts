import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiParam, ApiProperty } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('hospitals')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiParam({ name: 'id' })
  async update(@Param('id') id, @Body() userData: User): Promise<any> {
    userData.id = Number(id);
    return this.usersService.update(userData);
  }
  @Get(':id')
  async show(@Param('id') id: string) {
    return this.usersService.searchNearBy();
  }

  @Get('fetch')
  async fetchCloseBy(@Param('id') id: string) {
    return this.usersService.searchNearBy();
  }

  @Get('search-nearby')
  async searchNearBy() {
    return this.usersService.searchNearBy();
  }
}
