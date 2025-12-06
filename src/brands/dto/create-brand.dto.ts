import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({
    example: 'Toyota',
    description: 'The name of the brand',
    nullable: false,
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  name: string;
}
