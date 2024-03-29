import { EmotionServiceTag, Photo } from '@domain';
import {
  Controller,
  FileTypeValidator,
  Inject,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { EmotionService } from './emotion.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Emotion')
@Controller('emotion')
export class EmotionController {
  @Inject(EmotionServiceTag) private readonly service: EmotionService;

  @Post('detect')
  @ApiResponse({ type: Photo })
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  public async detectEmotion(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/jpeg' })],
      }),
    )
    file: Express.Multer.File,
  ): Promise<Array<any>> {
    return this.service.detect(file);
  }
}
