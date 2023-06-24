import { Module } from '@nestjs/common';
import { OverlayDataController } from './overlay-data.controller';
import { OverlayDataService } from './overlay-data.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OverlayDataController],
  providers: [OverlayDataService, PrismaService],
})
export class OverlayDataModule {}
