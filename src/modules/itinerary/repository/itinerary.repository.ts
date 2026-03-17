import { Injectable } from "@nestjs/common"
import { PrismaService } from "../../../infrastructure/database/prisma.service"

@Injectable()
export class ItineraryRepository {

  constructor(private prisma: PrismaService) {}

  async createItineraryDay(tripId: string, data: any) {
    return this.prisma.itineraryDay.create({
      data: {
        tripId,
        dayNumber: data.dayNumber,
        notes: data.notes
      }
    })
  }

  async getTripItinerary(tripId: string) {
    return this.prisma.itineraryDay.findMany({
      where: { tripId },
      include: {
        activities: true
      },
      orderBy: {
        dayNumber: "asc"
      }
    })
  }

  async createActivity(data: any) {
    return this.prisma.activity.create({
      data
    })
  }

  async deleteActivity(id: string) {
    return this.prisma.activity.delete({
      where: { id }
    })
  }

}