import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TripsModule } from './modules/trips/trips.module';
import { ItineraryModule } from './modules/itinerary/itinerary.module';
import { ExpensesModule } from './modules/expenses/expenses.module';
import { AiModule } from './modules/ai/ai.module';
import { RecommendationsModule } from './modules/recommendations/recommendations.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, UsersModule, TripsModule, ItineraryModule, ExpensesModule, AiModule, RecommendationsModule,  DatabaseModule,
    TripsModule,ItineraryModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
