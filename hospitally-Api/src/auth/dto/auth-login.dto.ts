import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({example:'unth@hospital.com',description:'the official mail'})
  @IsEmail()
  email: string;

  @ApiProperty({example:'password'})
  @IsNotEmpty()
  password: string;
}
