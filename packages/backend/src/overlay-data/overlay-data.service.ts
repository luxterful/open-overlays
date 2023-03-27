import { Injectable } from '@nestjs/common';

const inMemoryData = {};

@Injectable()
export class OverlayDataService {
  getById(id: string): string {
    const data = inMemoryData[id] ?? {};
    return data;
  }

  setById(id: string, data: any): void {
    inMemoryData[id] = data;
  }
}
