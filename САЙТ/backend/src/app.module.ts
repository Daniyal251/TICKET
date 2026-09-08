import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsModule } from './artists/artists.module';
import { ReleasesModule } from './releases/releases.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USERNAME || 'ticket',
      password: process.env.DATABASE_PASSWORD || 'ticket_password',
      database: process.env.DATABASE_NAME || 'ticket_main',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    ArtistsModule,
    ReleasesModule,
    EventsModule,
  ],
})
export class AppModule {}
