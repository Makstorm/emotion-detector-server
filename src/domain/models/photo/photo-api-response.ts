import { ApiProperty } from '@nestjs/swagger';
import { randomInt, randomUUID } from 'crypto';

export class UserDto {
  @ApiProperty({ type: String, example: 'Pt4shk4' })
  public username: string;

  @ApiProperty({ type: String, example: 'Maksym' })
  public name: string;
}

export class UrlsResponseDto {
  @ApiProperty({ type: String, example: 'https://picsum.photos/200/300' })
  public large: string;

  @ApiProperty({ type: String, example: 'https://picsum.photos/200/300' })
  public regular: string;

  @ApiProperty({ type: String, example: 'https://picsum.photos/200/300' })
  public raw: string;

  @ApiProperty({ type: String, example: 'https://picsum.photos/200/300' })
  public small: string;
}

export class Photo {
  @ApiProperty({ type: Number, example: randomInt(10) })
  public id: number;

  @ApiProperty({ type: Number, example: randomInt(10) })
  public width: number;

  @ApiProperty({ type: Number, example: randomInt(10) })
  public height: number;

  @ApiProperty({ type: () => UrlsResponseDto })
  public urls: UrlsResponseDto;

  @ApiProperty({ type: String, example: randomUUID() })
  public color: string | null;

  @ApiProperty({ type: () => UserDto })
  public user: UserDto;
}
