// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {
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
