import { IPhotoService } from '@domain';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createApi } from 'unsplash-js';

@Injectable()
export class PhotoService implements IPhotoService {
  @Inject(ConfigService) private readonly configService: ConfigService;

  public async searchPhotos(
    query: string,
    page: number,
    perPage: number,
  ): Promise<any> {
    const api = createApi({
      // Don't forget to set your access token here!
      // See https://unsplash.com/developers
      accessKey: this.configService.getOrThrow('PHOTO_API_TOKEN'),
    });

    const response = await api.search
      .getPhotos({
        query: query,
        orientation: 'landscape',
        page: page,
        perPage: perPage,
      })
      .then((result) => result.response.results)
      .catch(() => {
        console.log('something went wrong!');
      });

    return response;
  }
}
