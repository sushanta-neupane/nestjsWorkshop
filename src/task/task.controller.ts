import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CreateTaskDto } from './dto/task.dto';
import { PrismaService } from 'prisma.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: PrismaService) {}

  @Post()
  async addTask(@Body() taskBody: CreateTaskDto) {
   
    await this.taskService.task.create({
      data: taskBody
    })
  }

  @Get()
  async getTasks() {
    return await this.taskService.task.findMany()
  }

  @Get(':taskname')
  searchTask(@Param('taskname') taskname: string) {
    return 'search success';
  }
}
