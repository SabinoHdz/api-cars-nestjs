import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  findAll() {
    return this.cars;
  }
  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new BadRequestException(`Car with id ${id} not found`);
    return car;
  }
  createCar(createCarDto: CreateCarDto): Car {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto): Car {
    let carDB = this.findById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  deleteCar(id: string) {
    this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return {
      message: `Car with id ${id} has been deleted`,
    };
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
