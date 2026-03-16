import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../infrastructure/database/prisma.service";

@Injectable()
export class TripsRepository {

  constructor(private prisma: PrismaService) {}

  // async createTrip(userId: string, data: any) {
  //   return this.prisma.trip.create({
  //     data: {
  //       ...data,
  //       ownerId: userId
  //     }
  //   });
  // }

  async createTrip(userId: string, data: any) {
    return this.prisma.trip.create({
      data: {
        title: data.title,
        destination: data.destination,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        budget: data.budget,
        ownerId: userId
      }
    })
  }

  async findTripsByUser(userId: string) {
    return this.prisma.trip.findMany({
      where: {
        ownerId: userId
      },
      include: {
        itineraryDays: true,
        expenses: true
      }
    });

  }

  async findTripById(tripId: string) {
    return this.prisma.trip.findUnique({
      where: { id: tripId },
      include: {
        itineraryDays: {
          include: {
            activities: true
          }
        },
        expenses: true
      }
    });

  }

  async deleteTrip(tripId: string, userId: string) {
    return this.prisma.trip.delete({
      where: { id: tripId , ownerId: userId}
    });

  }

  async updateTrip(tripId: string, data: any) {
    return this.prisma.trip.update({
      where: { id: tripId },
      data
    });
  
  }

}