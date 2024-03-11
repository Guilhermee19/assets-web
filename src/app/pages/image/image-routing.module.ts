import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './image.component';

const routes: Routes = [
  {
    path: '',
    component: ImageComponent,
  },
  {
    path: 'qrcode',
    loadChildren: () =>
      import('./qrcode-custom/qrcode-custom.module').then(
        (m) => m.QrcodeCustomModule
      ),
  },
  {
    path: 'base64',
    loadChildren: () =>
      import('./base64/base64.module').then((m) => m.Base64Module),
  },
  {
    path: 'convert',
    loadChildren: () =>
      import('./convert-image/convert-image.module').then(
        (m) => m.ConvertImageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageRoutingModule {}
