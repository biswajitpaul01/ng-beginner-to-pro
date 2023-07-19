import { Component } from '@angular/core';
import { HelloComponent } from './hello.component';
import { WorldComponent } from './world.component';

@Component({
  selector: 'ngcomponent-outlet-component',
  template: `
    <button class="btn" (click)="render()">Render dynamic component</button>
    <ng-container *ngComponentOutlet="currentComponent"></ng-container>
  `
})
export class NgComponentOutletComponent {
  public components = [HelloComponent, WorldComponent];
  public currentComponent: any = null;

  public render(): void {
    const index = Math.round(Math.random());
    this.currentComponent = this.components[index];
  }
}
