import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/components/shared/shared.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
