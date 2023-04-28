export interface IEmotionService {
  detect(file: Express.Multer.File): Promise<Array<any>>;
}
