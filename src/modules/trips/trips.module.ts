import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { TripsRepository } from 'src/modules/trips/repository/trips.repository';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';

@Module({
  imports:[DatabaseModule],
  controllers: [TripsController],
  providers: [TripsService, TripsRepository]
})
export class TripsModule {}
