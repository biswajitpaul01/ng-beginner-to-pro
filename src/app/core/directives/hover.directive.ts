import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.style.cursor = 'pointer';
  }
}
