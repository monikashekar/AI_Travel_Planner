import { IsNumber, IsString, IsOptional } from "class-validator";

export class CreateExpenseDto {

  @IsString()
  tripId: string;

  @IsNumber()
  amount: number;

  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  description?: string;

}