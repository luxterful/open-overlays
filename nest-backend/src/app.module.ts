import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketGateway } from './websocket/gateway';
import { OverlayDataModule } from './overlay-data/overlay-data.module';
import { OverlayDataService } from './overlay-data/overlay-data.service';

@Module({
  imports: [OverlayDataModule],
  controllers: [AppController],
  providers: [AppService, SocketGateway, OverlayDataService],
})
export class AppModule {}
