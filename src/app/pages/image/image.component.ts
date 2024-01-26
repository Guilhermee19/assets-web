import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  constructor(private fb: FormBuilder) {}

  image_form = this.fb.group({
    link: ['iamgui.dev'],
    size: [1],
    color: ['#000000'],
    bg_color: ['#ffffff'],
  });

  saveAsImage(parent: any) {
    let parentElement = null;

    parentElement = parent.qrcElement.nativeElement.querySelector('img').src;

    if (parentElement) {
      // converts base 64 encoded image to blobData
      const blobData = this.convertBase64ToBlob(parentElement);
      // saves as image
      const blob = new Blob([blobData], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // name of the file
      link.download = 'angularx-qrcode';
      link.click();
    }
  }

  private convertBase64ToBlob(Base64Image: string) {
    // split into two parts
    const parts = Base64Image.split(';base64,');
    // hold the content type
    const imageType = parts[0].split(':')[1];
    // decode base64 string
    const decodedData = window.atob(parts[1]);
    // create unit8array of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);
    // insert all character code into uint8array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // return blob image after conversion
    return new Blob([uInt8Array], { type: imageType });
  }
}
