import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HelloComponent } from "./hello.component";
import { NgComponentOutletRoutingModule } from "./ngcomponent-outlet-routing.module";
import { NgComponentOutletComponent } from "./ngcomponent-outlet.component";
import { WorldComponent } from "./world.component";

@NgModule({
  imports: [
    CommonModule,
    NgComponentOutletRoutingModule
  ],
  declarations: [
    NgComponentOutletComponent,
    HelloComponent,
    WorldComponent
  ],
  exports: [
    NgComponentOutletComponent,
    HelloComponent,
    WorldComponent
  ]
})
export class NgComponentOutletModule { }
