import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { PageLoadingComponent } from './page-loading/page-loading.component';
import { PaginationComponent } from './pagination/pagination.component';
import { IconShared } from 'src/app/directives/icon.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    IconShared
  ],
  declarations: [
    LoadingComponent,
    PageLoadingComponent,
    PaginationComponent,
  ],
  exports: [
    LoadingComponent,
    PageLoadingComponent,
    PaginationComponent,
    IconShared
  ],
})
export class SharedModule {}
