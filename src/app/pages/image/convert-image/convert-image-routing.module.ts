import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertImageComponent } from './convert-image.component';

const routes: Routes = [{ path: '', component: ConvertImageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertImageRoutingModule { }
