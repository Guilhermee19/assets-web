import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorRoutingModule } from './color-routing.module';
import { ColorComponent } from './color.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [ColorComponent],
  imports: [CommonModule, ColorRoutingModule, ColorPickerModule],
})
export class ColorModule {}
