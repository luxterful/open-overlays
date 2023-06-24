import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketGateway } from './websocket/gateway';
import { OverlayDataModule } from './overlay-data/overlay-data.module';
import { OverlayDataService } from './overlay-data/overlay-data.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [OverlayDataModule],
  controllers: [AppController],
  providers: [AppService, SocketGateway, OverlayDataService, PrismaService],
})
export class AppModule {}
