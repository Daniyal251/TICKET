import { Controller, Get, Post, Put, Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ArtistsService, CreateArtistDto, UpdateArtistDto } from './artists.service';
import { Artist } from './artist.entity';

@ApiTags('artists')
@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  @ApiOperation({ summary: 'Получить всех артистов' })
  @ApiResponse({ status: 200, description: 'Список всех активных артистов', type: [Artist] })
  findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }

  @Get('featured')
  @ApiOperation({ summary: 'Получить featured артистов' })
  @ApiResponse({ status: 200, description: 'Список featured артистов', type: [Artist] })
  findFeatured(): Promise<Artist[]> {
    return this.artistsService.findFeatured();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить артиста по ID' })
  @ApiResponse({ status: 200, description: 'Данные артиста', type: Artist })
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Artist> {
    return this.artistsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Создать нового артиста' })
  @ApiResponse({ status: 201, description: 'Артист успешно создан', type: Artist })
  create(@Body() createArtistDto: CreateArtistDto): Promise<Artist> {
    return this.artistsService.create(createArtistDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Обновить данные артиста' })
  @ApiResponse({ status: 200, description: 'Артист успешно обновлен', type: Artist })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateArtistDto: UpdateArtistDto,
  ): Promise<Artist> {
    return this.artistsService.update(id, updateArtistDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить артиста (деактивировать)' })
  @ApiResponse({ status: 200, description: 'Артист успешно удален' })
  remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.artistsService.remove(id);
  }
}
