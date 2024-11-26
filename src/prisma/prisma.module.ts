import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporta PrismaService PUNNTOOOO EXTRA UWU 19/11/2024
})
export class PrismaModule {}
