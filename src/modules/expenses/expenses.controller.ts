import { Controller, Post, Body, Get, Param, Delete, UseGuards } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";

@Controller()
export class ExpensesController {

  constructor(private expensesService: ExpensesService) {}

  @Post("/expenses")
  @UseGuards(JwtAuthGuard)
  createExpense(
    @CurrentUser() userId: string,
    @Body() dto: any
  ) {
    return this.expensesService.createExpense(userId, dto);
  }

  @Get("/trips/:tripId/expenses")
  @UseGuards(JwtAuthGuard)
  getTripExpenses(
    @CurrentUser() userId: string,
    @Param("tripId") tripId: string
  ) {
    return this.expensesService.getTripExpenses(userId, tripId);
  }

  @Delete("/expenses/:id")
  deleteExpense(@Param("id") id: string) {
    return this.expensesService.deleteExpense(id);
  }

}