import {
  EmotionResponse,
  Emotions,
  FileServiceTag,
  IEmotionService,
  IFileService,
  IPhotoService,
  PhotoServiceTag,
} from '@domain';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
// import FormData from 'form-data';

@Injectable()
export class EmotionService implements IEmotionService {
  @Inject(HttpService) private readonly httpService: HttpService;

  @Inject(ConfigService) private readonly configService: ConfigService;

  @Inject(FileServiceTag)
  private readonly fileService: IFileService;

  @Inject(PhotoServiceTag) private readonly photoService: IPhotoService;

  public async getHighestEmotion(emotions: Emotions): Promise<string> {
    let highestEmotion = '';
    let highestValue = 0;

    for (const [emotion, value] of Object.entries(emotions)) {
      if (value > highestValue) {
        highestEmotion = emotion;
        highestValue = value;
      }
    }

    return highestEmotion;
  }

  public async detect(file: Express.Multer.File): Promise<any> {
    if (!file) {
      throw new BadRequestException('Missing credentials');
    }

    const blob = new Blob([file.buffer], { type: file.mimetype });

    const formData = new FormData();

    formData.append('photo', blob, 'file');

    const { data } = await firstValueFrom(
      this.httpService
        .post<EmotionResponse>(
          `https://api.luxand.cloud/photo/emotions`,
          formData,
          {
            headers: {
              token: this.configService.getOrThrow('API_TOKEN'),
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    const mainEmotion = await this.getHighestEmotion(data.faces[0].emotions);
    console.log(mainEmotion);

    const photos = await this.photoService.searchPhotos(
      mainEmotion,
      Math.floor(Math.random() * 120),
      3,
    );

    return photos;
  }
}
