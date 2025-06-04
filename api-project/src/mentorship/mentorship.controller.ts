import { Controller, Post, Get, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { MentorshipService } from './mentorship.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMentorshipDto } from './dto/create-mentorship.dto';

@UseGuards(JwtAuthGuard)
@Controller('mentorships')
export class MentorshipController {
  constructor(private mentorshipService: MentorshipService) {}

  @Post()
  create(@Body() dto: CreateMentorshipDto, @Request() req) {
    return this.mentorshipService.create(dto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.mentorshipService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.mentorshipService.remove(+id, req.user.userId);
  }
}
