import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Controller('health')
export class PrismaController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('db')
  async getDbHealth() {
    if (!(await this.prisma.isHealthy())) {
      throw new ServiceUnavailableException({
        status: 'error',
        database: 'unreachable',
      });
    }
    return { status: 'ok', database: 'reachable' };
  }
}
