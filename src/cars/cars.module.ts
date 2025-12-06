import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  // exports the CarsService so it can be used in other modules
  exports: [CarsService],
})
export class CarsModule {}
