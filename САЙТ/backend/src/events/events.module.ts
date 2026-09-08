import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  date: Date;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  venue: string;

  @Column({ nullable: true })
  coverImage: string;

  @Column({ default: false })
  isPublished: boolean;

  @CreateDateColumn()
  createdAt: Date;
}

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [],
  providers: [],
  exports: [],
})
export class EventsModule {}
