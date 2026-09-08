import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ReleasesModule } from './releases/releases.module';
import { ArtistsModule } from './artists/artists.module';
import { DistributionModule } from './distribution/distribution.module';

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
      database: process.env.DATABASE_NAME || 'ticket_distributor',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    AuthModule,
    ReleasesModule,
    ArtistsModule,
    DistributionModule,
  ],
})
export class AppModule {}
