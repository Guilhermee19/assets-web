import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotationRoutingModule } from './annotation-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AnnotationComponent } from './annotation.component';

@NgModule({
  declarations: [
    AnnotationComponent
  ],
  imports: [
    CommonModule,
    AnnotationRoutingModule,
    DragDropModule
  ]
})
export class AnnotationModule { }
