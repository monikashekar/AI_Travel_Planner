import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTripDto {
  @IsString()
  title: string;

  @IsString()
  destination: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsOptional()
  @IsNumber()
  budget?: number;
}