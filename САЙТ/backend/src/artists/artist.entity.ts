import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  coverImage: string;

  @Column('simple-array', { nullable: true })
  socialLinks: string[];

  @Column({ default: false })
  isFeatured: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
