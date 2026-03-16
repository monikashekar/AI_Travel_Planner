import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    UseGuards,
  } from "@nestjs/common";
  import { TripsService } from "./trips.service";
  import { CreateTripDto } from "./dto/create-trip.dto";
import { PrismaService } from "src/infrastructure/database/prisma.service";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt-auth.guard";
import { UpdateTripDto } from "src/modules/trips/dto/update-trip.dto";
import { CurrentUser } from "src/common/decorators/current-user.decorator";

  
  @Controller("trips")
  export class TripsController {
    constructor(private readonly tripsService: TripsService, 
        private prisma: PrismaService) {}
  
  
        //POST /TRIPS
        @Post()
        @UseGuards(JwtAuthGuard)
        createTrip(
          @CurrentUser() userId: string,
          @Body() dto: CreateTripDto
        ) {
          return this.tripsService.createTrip(userId, dto)
        }
    



    // GET /trips
    @Get()
    async getTrips() {
      const userId = "demo-user";
      return this.tripsService.getTrips(userId);
    }
  
    // GET /trips/:id
    @Get(":id")
    async getTrip(@Param("id") id: string) {
      return this.tripsService.getTripById(id);
    }
  
    // DELETE /trips/:id
    @Delete(':id')
@UseGuards(JwtAuthGuard)
deleteTrip(
  @Param('id') id: string,
  @CurrentUser() userId: string
) {
  return this.tripsService.deleteTrip(id, userId)
}


  
@Patch(':id')
@UseGuards(JwtAuthGuard)
updateTrip(
  @Param('id') id: string,
  @CurrentUser() userId: string,
  @Body() dto: UpdateTripDto
) {
  return this.tripsService.updateTrip(id, userId, dto)
}
  }