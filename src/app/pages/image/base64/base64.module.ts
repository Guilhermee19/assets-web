import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Base64RoutingModule } from './base64-routing.module';
import { Base64Component } from './base64.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IconShared } from 'src/app/directives/icon.module';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  declarations: [
    Base64Component,
  ],
  imports: [
    CommonModule,
    Base64RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    IconShared,
    SharedModule
  ],
  exports: [
    Base64Component,
  ]
})
export class Base64Module { }
