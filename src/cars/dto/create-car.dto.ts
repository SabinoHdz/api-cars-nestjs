import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({
    example: 'Toyota',
    description: 'The brand of the car',
    nullable: false,
  })
  @IsString({ message: 'Brand must be a string' })
  readonly brand: string;
  @ApiProperty({
    example: 'Corolla',
    description: 'The model of the car',
    nullable: false,
  })
  @IsString({ message: 'Model must be a string' })
  readonly model: string;
}
