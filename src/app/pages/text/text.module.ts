import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextRoutingModule } from './text-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './text.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    TextRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [],
})
export class TextModule {}
