import { IsOptional, IsString, IsNumber } from "class-validator";

export class UpdateTripDto {

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  destination?: string;

  @IsOptional()
  @IsNumber()
  budget?: number;

}