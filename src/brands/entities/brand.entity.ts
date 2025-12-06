import { ApiProperty } from '@nestjs/swagger';

export class Brand {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'The unique identifier of the brand',
    nullable: false,
    uniqueItems: true,
  })
  id: string;
  @ApiProperty({
    example: 'Toyota',
    description: 'The name of the brand',
    nullable: false,
    minLength: 2,
  })
  name: string;

  @ApiProperty({
    example: 1627849923000,
    description: 'The timestamp when the brand was created',
    nullable: false,
  })
  createdAt: number;

  @ApiProperty({
    example: 1627849923000,
    description: 'The timestamp when the brand was last updated',
    nullable: true,
  })
  updatedAt?: number;
}
