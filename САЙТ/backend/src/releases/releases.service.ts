import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Release } from './release.entity';

@Injectable()
export class ReleasesService {
  constructor(
    @InjectRepository(Release)
    private readonly releaseRepository: Repository<Release>,
  ) {}

  async findAll(): Promise<Release[]> {
    return this.releaseRepository.find({
      where: { isPublished: true },
      order: { releaseDate: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Release> {
    const release = await this.releaseRepository.findOne({ where: { id, isPublished: true } });
    if (!release) {
      throw new NotFoundException(`Релиз с ID ${id} не найден`);
    }
    return release;
  }

  async findLatest(limit: number = 10): Promise<Release[]> {
    return this.releaseRepository.find({
      where: { isPublished: true },
      order: { releaseDate: 'DESC' },
      take: limit,
    });
  }
}
