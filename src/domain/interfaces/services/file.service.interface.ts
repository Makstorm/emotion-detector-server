export interface IFileService {
  createFile(file: Express.Multer.File): Promise<string>;
}
