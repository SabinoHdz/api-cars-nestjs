import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  // exports the BrandsService so it can be used in other modules
  exports: [BrandsService],
})
export class BrandsModule {}
