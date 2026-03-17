import { Module } from "@nestjs/common";
import { ExpensesController } from "./expenses.controller";
import { ExpensesService } from "./expenses.service";
import { ExpensesRepository } from "./repository/expenses.repository";
import { TripsRepository } from "../trips/repository/trips.repository";
import { DatabaseModule } from "../../infrastructure/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [ExpensesController],
  providers: [ExpensesService, ExpensesRepository, TripsRepository]
})
export class ExpensesModule {}