import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrcodeCustomComponent } from './qrcode-custom.component';

const routes: Routes = [
  {
    path: '',
    component: QrcodeCustomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrcodeCustomRoutingModule { }
