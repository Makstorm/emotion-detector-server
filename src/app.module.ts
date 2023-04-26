import { Module } from '@nestjs/common';
import { EmotionModule } from './modules';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    EmotionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
