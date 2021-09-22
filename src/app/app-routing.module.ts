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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
