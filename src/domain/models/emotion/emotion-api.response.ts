export class Emotions {
  [key: string]: number;
}

export class Face {
  public rectangle: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  public emotions: Emotions;
}

export class EmotionResponse {
  public status: string;
  public faces: Face[];
}
