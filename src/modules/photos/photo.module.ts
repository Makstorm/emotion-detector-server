import { PhotoServiceTag } from '@domain';
import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: PhotoServiceTag,
      useClass: PhotoService,
    },
  ],
  exports: [PhotoServiceTag],
})
export class PhotoModule {}
