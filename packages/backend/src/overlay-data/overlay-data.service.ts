import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

const inMemoryData = {};

@Injectable()
export class OverlayDataService {
  constructor(private prismaService: PrismaService) {}

  async getById(id: string): Promise<string> {
    const data = inMemoryData[id] ?? {};
    const data2 = await this.prismaService.overlay.findFirst({ where: { id } });
    console.log(data2);
    return data;
  }

  async setById(id: string, data: any): Promise<void> {
    inMemoryData[id] = data;
    await this.prismaService.overlay.upsert({
      where: {
        id,
      },
      create: {
        id,
        dataStage: data,
        dataLive: {},
      },
      update: {
        dataStage: data,
      },
    });
  }
}
