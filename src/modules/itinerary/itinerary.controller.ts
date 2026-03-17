import { Controller, Post, Get, Delete, Param, Body } from "@nestjs/common"
import { ItineraryService } from "./itinerary.service"

@Controller()
export class ItineraryController {

  constructor(private itineraryService: ItineraryService) {}

  @Post("/trips/:tripId/itinerary")
  createDay(
    @Param("tripId") tripId: string,
    @Body() dto: any
  ) {
    return this.itineraryService.createDay(tripId, dto)
  }

  @Get("/trips/:tripId/itinerary")
  getTripItinerary(
    @Param("tripId") tripId: string
  ) {
    return this.itineraryService.getTripItinerary(tripId)
  }

  @Post("/activities")
  createActivity(@Body() dto: any) {
    return this.itineraryService.createActivity(dto)
  }

  @Delete("/activities/:id")
  deleteActivity(@Param("id") id: string) {
    return this.itineraryService.deleteActivity(id)
  }

}