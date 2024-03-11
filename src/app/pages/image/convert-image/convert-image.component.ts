import { Component } from '@angular/core';
import { ImageConversionService } from 'src/app/services/image-conversion.service';

@Component({
  selector: 'app-convert-image',
  templateUrl: './convert-image.component.html',
  styleUrls: ['./convert-image.component.scss'],
})
export class ConvertImageComponent {
  convertedImageSrc: string | null = null;

  constructor(private imageConversionService: ImageConversionService) {}

  async convertImageToWebP(event: any) {
    const file = event.target.files[0];

    try {
      const webpImageBlob = await this.imageConversionService.convertToWebP(
        file
      );
      this.convertedImageSrc = URL.createObjectURL(webpImageBlob);
    } catch (error) {
      console.error('Erro ao converter imagem para WebP:', error);
    }
  }
}
