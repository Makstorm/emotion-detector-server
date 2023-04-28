import { EmotionServiceTag } from '@domain';
import { Module } from '@nestjs/common';
import { EmotionService } from './emotion.service';
import { EmotionController } from './emotion.controller';
import { HttpModule } from '@nestjs/axios';
import { FileModule } from '../files';
import { PhotoModule } from '../photos';

@Module({
  imports: [HttpModule, FileModule, PhotoModule],
  controllers: [EmotionController],
  providers: [
    {
      provide: EmotionServiceTag,
      useClass: EmotionService,
    },
  ],
  exports: [EmotionServiceTag],
})
export class EmotionModule {}
