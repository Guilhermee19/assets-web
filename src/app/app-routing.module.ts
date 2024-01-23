import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'text',
        loadChildren: () =>
          import('./pages/text/text.module').then((m) => m.TextModule),
      },
      {
        path: 'image',
        loadChildren: () =>
          import('./pages/image/image.module').then((m) => m.ImageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
