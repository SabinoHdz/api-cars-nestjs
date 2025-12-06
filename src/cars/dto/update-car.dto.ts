import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'The unique identifier of the car',
    nullable: true,
  })
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @ApiProperty({
    example: 'Toyota',
    description: 'The brand of the car',
    nullable: true,
  })
  @IsString({ message: 'Brand must be a string' })
  @IsOptional()
  readonly brand?: string;

  @ApiProperty({
    example: 'Corolla',
    description: 'The model of the car',
    nullable: true,
  })
  @IsString({ message: 'Model must be a string' })
  @IsOptional()
  readonly model?: string;
}
