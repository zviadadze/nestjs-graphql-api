import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  username: string;

  @Field()
  @MaxLength(65)
  password: string;
}
