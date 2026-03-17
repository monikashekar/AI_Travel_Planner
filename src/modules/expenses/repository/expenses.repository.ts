import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../infrastructure/database/prisma.service";

@Injectable()
export class ExpensesRepository {

  constructor(private prisma: PrismaService) {}

  createExpense(data: any) {
    return this.prisma.expense.create({
      data
    });
  }

  getTripExpenses(tripId: string) {
    return this.prisma.expense.findMany({
      where: { tripId },
      orderBy: { date: "desc" }
    });
  }

  deleteExpense(id: string) {
    return this.prisma.expense.delete({
      where: { id }
    });
  }

}