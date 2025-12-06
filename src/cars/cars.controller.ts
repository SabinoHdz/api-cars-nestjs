import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Car } from './interfaces/cars.interface';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  @ApiResponse({ status: 200, description: 'List of cars', type: [Car] })
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get a car by ID',
    type: Car,
  })
  @ApiResponse({ status: 404, description: 'Car not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findById(id);
  }
  @Post()
  @ApiResponse({
    status: 201,
    description: 'Car created successfully',
    type: Car,
  })
  createCar(@Body() createCarDto: CreateCarDto) {
    const newCar = this.carsService.createCar(createCarDto);
    return newCar;
  }
  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Car updated successfully',
    type: Car,
  })
  @ApiResponse({ status: 404, description: 'Car not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.updateCar(id, updateCarDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Car deleted successfully',
    type: Car,
  })
  @ApiResponse({ status: 404, description: 'Car not found' })
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }
}
