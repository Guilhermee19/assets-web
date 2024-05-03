import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const SPR = false;

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
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
      {
        path: 'color',
        loadChildren: () =>
          import('./pages/color/color.module').then((m) => m.ColorModule),
      },
      { path: 'annotation', loadChildren: () => import('./pages/annotation/annotation.module').then(m => m.AnnotationModule) },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: SPR ? 'enabled' : 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
