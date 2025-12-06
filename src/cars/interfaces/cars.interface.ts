import { ApiProperty } from '@nestjs/swagger';

export class Car {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'The unique identifier of the car',
    nullable: false,
    uniqueItems: true,
  })
  id: string;
  @ApiProperty({
    example: 'Toyota',
    description: 'The brand of the car',
    nullable: false,
    minLength: 2,
  })
  brand: string;
  @ApiProperty({
    example: 'Corolla',
    description: 'The model of the car',
    nullable: false,
    minLength: 1,
  })
  model: string;
}
