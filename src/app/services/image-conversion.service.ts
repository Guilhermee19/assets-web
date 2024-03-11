import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageConversionService {
  // Função para converter imagens de PNG para WebP
  async convertToWebP(pngImage: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob: Blob | null) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Erro ao converter para Blob'));
              }
            }, 'image/webp');
          } else {
            reject(new Error('Erro ao obter contexto do canvas'));
          }
        };
        img.onerror = (error) => {
          reject(error);
        };
        img.src = event.target.result;
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(pngImage);
    });
  }

  // Função para converter imagens para outros formatos
  async convertToFormat(image: File, format: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob: Blob | null) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Erro ao converter para Blob'));
              }
            }, format);
          } else {
            reject(new Error('Erro ao obter contexto do canvas'));
          }
        };
        img.onerror = (error) => {
          reject(error);
        };
        img.src = event.target.result;
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(image);
    });
  }
}
