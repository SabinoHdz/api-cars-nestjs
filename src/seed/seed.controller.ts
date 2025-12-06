import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Seed executed successfully' })
  runSeed() {
    return this.seedService.executeSeed();
  }
}
