import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  @Input('appChangeCase') case: string = '';

  constructor(private el: ElementRef) {  }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;

    switch (this.case) {
      case 'uppercase':
          this.el.nativeElement.value = value.toUpperCase();
        break;

      case 'lowercase':
        this.el.nativeElement.value = value.toLowerCase();
        break;

      default:
        this.el.nativeElement.value = value;
        break;
    }
  }

}
