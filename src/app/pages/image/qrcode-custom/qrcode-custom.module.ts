import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrcodeCustomRoutingModule } from './qrcode-custom-routing.module';
import { QrcodeCustomComponent } from './qrcode-custom.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    QrcodeCustomComponent
  ],
  imports: [
    CommonModule,
    QrcodeCustomRoutingModule,
    QRCodeModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule
  ]
})
export class QrcodeCustomModule { }
