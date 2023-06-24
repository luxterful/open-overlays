import { Controller, Get, Param } from '@nestjs/common';
import { OverlayDataService } from './overlay-data.service';

@Controller('overlays')
export class OverlayDataController {
  constructor(private readonly overlayDataService: OverlayDataService) {}

  // @Get()
  // getList(): string {
  //   return this.overlayDataService.getHello();
  // }

  @Get(':id')
  async findOne(@Param() params): Promise<string> {
    return await this.overlayDataService.getById(params.id);
  }
}
