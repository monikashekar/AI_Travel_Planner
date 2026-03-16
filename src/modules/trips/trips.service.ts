import { ConsoleLogger, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { TripsRepository } from "./repository/trips.repository";

@Injectable()
export class TripsService {

  constructor(private tripsRepo: TripsRepository) {}

  async createTrip(userId: string, data: any) {
    let trip; 
    try{
      trip= this.tripsRepo.createTrip(userId, data);
      console.log("Created trip:", await trip)
      return trip;
    }catch (error){
       console.log('could not create trip:', error);

    }
    
  }

  getTrips(userId: string) {
    return this.tripsRepo.findTripsByUser(userId);
  }

  getTripById(id: string) {
    return this.tripsRepo.findTripById(id);
  }

  deleteTrip(id: string, userId: string ) {
    return this.tripsRepo.deleteTrip(id, userId);
  }

  async updateTrip(tripId: string, userId: string, data: any) {

    const trip = await this.tripsRepo.findTripById(tripId)

    console.log("Trip ID:", tripId)
    console.log("Trip found:", trip)
  
    if (!trip) {
      throw new NotFoundException("Trip not found")
    }
  
    if (trip.ownerId !== userId) {
      throw new ForbiddenException("You cannot edit this trip")
    }

  
    return this.tripsRepo.updateTrip(tripId, data)
  
  }

}