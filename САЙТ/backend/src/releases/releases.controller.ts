import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReleasesService } from './releases.service';
import { Release } from './release.entity';

@ApiTags('releases')
@Controller('releases')
export class ReleasesController {
  constructor(private readonly releasesService: ReleasesService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все релизы' })
  @ApiResponse({ status: 200, description: 'Список всех опубликованных релизов', type: [Release] })
  findAll(): Promise<Release[]> {
    return this.releasesService.findAll();
  }

  @Get('latest')
  @ApiOperation({ summary: 'Получить последние релизы' })
  @ApiResponse({ status: 200, description: 'Список последних релизов', type: [Release] })
  findLatest(): Promise<Release[]> {
    return this.releasesService.findLatest(10);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить релиз по ID' })
  @ApiResponse({ status: 200, description: 'Данные релиза', type: Release })
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Release> {
    return this.releasesService.findOne(id);
  }
}
