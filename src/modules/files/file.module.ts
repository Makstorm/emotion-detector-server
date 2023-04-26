import { FileServiceTag } from '@domain';
import { Module } from '@nestjs/common';
import { FileService } from './file.service';

@Module({
  imports: [],
  providers: [
    {
      provide: FileServiceTag,
      useClass: FileService,
    },
  ],
  exports: [FileServiceTag],
})
export class FileModule {}
