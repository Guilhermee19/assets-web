import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { MatInputModule } from '@angular/material/input';

import { ImageRoutingModule } from './image-routing.module';
import { ImageComponent } from './image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    ImageRoutingModule,
    QRCodeModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class ImageModule {}
