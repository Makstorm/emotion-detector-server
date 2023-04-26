import {
  EmotionResponse,
  FileServiceTag,
  IEmotionService,
  IFileService,
} from '@domain';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
// import FormData from 'form-data';
import * as fs from 'fs';

@Injectable()
export class EmotionService implements IEmotionService {
  @Inject(HttpService) private readonly httpService: HttpService;

  @Inject(ConfigService) private readonly configService: ConfigService;

  @Inject(FileServiceTag)
  private readonly fileService: IFileService;

  public async detect(file: Express.Multer.File): Promise<void> {
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

    console.log(data.faces[0]);
  }
}
