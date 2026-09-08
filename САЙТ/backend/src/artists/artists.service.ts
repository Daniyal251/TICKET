import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
  ) {}

  async findAll(): Promise<Artist[]> {
    return this.artistRepository.find({
      where: { isActive: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Artist> {
    const artist = await this.artistRepository.findOne({ where: { id, isActive: true } });
    if (!artist) {
      throw new NotFoundException(`Артист с ID ${id} не найден`);
    }
    return artist;
  }

  async findFeatured(): Promise<Artist[]> {
    return this.artistRepository.find({
      where: { isFeatured: true, isActive: true },
      order: { createdAt: 'DESC' },
    });
  }

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const artist = this.artistRepository.create(createArtistDto);
    return this.artistRepository.save(artist);
  }

  async update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    await this.findOne(id);
    await this.artistRepository.update(id, updateArtistDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const artist = await this.findOne(id);
    artist.isActive = false;
    await this.artistRepository.save(artist);
  }
}

export interface CreateArtistDto {
  name: string;
  bio?: string;
  avatar?: string;
  coverImage?: string;
  socialLinks?: string[];
  isFeatured?: boolean;
}

export interface UpdateArtistDto {
  name?: string;
  bio?: string;
  avatar?: string;
  coverImage?: string;
  socialLinks?: string[];
  isFeatured?: boolean;
}
