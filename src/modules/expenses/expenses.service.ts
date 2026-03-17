import { Injectable, NotFoundException } from "@nestjs/common";
import { ExpensesRepository } from "./repository/expenses.repository";
import { TripsRepository } from "../trips/repository/trips.repository";

@Injectable()
export class ExpensesService {

  constructor(
    private expensesRepo: ExpensesRepository,
    private tripsRepo: TripsRepository
  ) {}

  async createExpense(userId: string, data: any) {
    const trip = await this.tripsRepo.findTripById(data.tripId);
    if (!trip) {
      throw new NotFoundException("Trip not found");
    }
    if (trip.ownerId !== userId) {
      throw new Error("Unauthorized");
    }
    return this.expensesRepo.createExpense({
      ...data,
      date: new Date()
    });
  }

  async getTripExpenses(userId: string, tripId: string) {
    const trip = await this.tripsRepo.findTripById(tripId);
    if (!trip || trip.ownerId !== userId) {
      throw new Error("Unauthorized");
    }
    return this.expensesRepo.getTripExpenses(tripId);
  }

  deleteExpense(id: string) {
    return this.expensesRepo.deleteExpense(id);
  }

}