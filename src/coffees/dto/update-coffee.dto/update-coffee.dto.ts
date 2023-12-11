import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from '../crate-coffee.dto/crate-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
