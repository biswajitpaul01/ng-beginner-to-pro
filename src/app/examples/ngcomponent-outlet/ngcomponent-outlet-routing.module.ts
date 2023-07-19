import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgComponentOutletComponent } from './ngcomponent-outlet.component';

const routes: Routes = [
  {
    path: '',
    component: NgComponentOutletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgComponentOutletRoutingModule { }
