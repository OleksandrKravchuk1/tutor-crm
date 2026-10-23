import { Global, Module } from '@nestjs/common';
import { PrismaController } from './prisma.controller.js';
import { PrismaService } from './prisma.service.js';

// Global so feature modules can inject PrismaService without importing this module
@Global()
@Module({
  controllers: [PrismaController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
