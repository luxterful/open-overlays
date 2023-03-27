import { Module } from '@nestjs/common';
import { OverlayDataController } from './overlay-data.controller';
import { OverlayDataService } from './overlay-data.service';

@Module({
  controllers: [OverlayDataController],
  providers: [OverlayDataService],
})
export class OverlayDataModule {}
