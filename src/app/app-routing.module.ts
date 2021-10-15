import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'input-output',
    loadChildren: () => import('./examples/input-output/input-output.module').then(m => m.InputOutputModule)
  },
  {
    path: 'custom-directive',
    loadChildren: () => import('./examples/custom-directive/custom-directive.module').then(m => m.CustomDirectiveModule)
  },
  {
    path: 'template-driven-form',
    loadChildren: () => import('./examples/forms/template-driven/template-driven.module').then(m => m.TemplateDrivenModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./examples/forms/reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'posts/:slug',
    loadChildren: () => import('./examples/posts/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./examples/posts/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./examples/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./examples/auth/register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
