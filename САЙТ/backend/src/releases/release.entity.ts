import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity('releases')
export class Release {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  coverArt: string;

  @Column({ default: 'single' })
  type: 'single' | 'ep' | 'album';

  @Column()
  releaseDate: Date;

  @Column({ nullable: true })
  upc: string;

  @Column('simple-array', { nullable: true })
  genres: string[];

  @Column({ default: false })
  isPublished: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
