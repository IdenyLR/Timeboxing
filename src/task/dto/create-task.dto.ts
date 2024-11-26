import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title;

  @IsOptional()
  @IsString()
  descripcion;

  @IsString()
  priority;

  @IsNumber()
  user_id;

  @IsNumber()
  status;
}
