import { Component } from '@angular/core';

@Component({
  template: `<div>{{msg}}<button class="btn" (click)="worldClick()">Bye Button</button></div>`,
})
export class WorldComponent {
  public msg = 'World Component is here!!!';

  constructor() {
    console.log('WorldComponent generated');
  }

  worldClick() {
    alert('World clicked');
  }
}
