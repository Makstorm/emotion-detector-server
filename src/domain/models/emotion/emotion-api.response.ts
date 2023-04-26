class Face {
  public rectangle: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  public emotions: any;
}

export class EmotionResponse {
  public status: string;
  public faces: Face[];
}
