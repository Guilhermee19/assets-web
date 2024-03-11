import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertImageRoutingModule } from './convert-image-routing.module';
import { ConvertImageComponent } from './convert-image.component';


@NgModule({
  declarations: [
    ConvertImageComponent
  ],
  imports: [
    CommonModule,
    ConvertImageRoutingModule
  ]
})
export class ConvertImageModule { }
