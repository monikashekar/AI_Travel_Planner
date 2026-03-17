import { Injectable } from "@nestjs/common"
import { ItineraryRepository } from "./repository/itinerary.repository"

@Injectable()
export class ItineraryService {

  constructor(private itineraryRepo: ItineraryRepository) {}

  createDay(tripId: string, data: any) {
    return this.itineraryRepo.createItineraryDay(tripId, data)
  }

  getTripItinerary(tripId: string) {
    return this.itineraryRepo.getTripItinerary(tripId)
  }

  createActivity(data: any) {
    return this.itineraryRepo.createActivity(data)
  }

  deleteActivity(id: string) {
    return this.itineraryRepo.deleteActivity(id)
  }

}