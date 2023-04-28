export interface IPhotoService {
  searchPhotos(query: string, page: number, perPage: number): Promise<any>;
}
