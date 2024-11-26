import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { StudentsModule } from './students/students.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [PrismaModule, UserModule, StudentsModule, TaskModule], // Importa PrismaModule aquí
})
export class AppModule {}
