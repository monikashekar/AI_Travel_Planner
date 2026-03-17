import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { ItineraryRepository } from 'src/modules/itinerary/repository/itinerary.repository';
import { ItineraryController } from './itinerary.controller';
import { ItineraryService } from './itinerary.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ItineraryController],
  providers: [ItineraryService, ItineraryRepository]
})
export class ItineraryModule {}
