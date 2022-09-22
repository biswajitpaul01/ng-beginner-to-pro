import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomDirectiveComponent } from 'src/app/examples/custom-directive/custom-directive.component';
import { ChangeCaseDirective } from './change-case.directive';

describe('ChangeCaseDirective', () => {
  let fixture: ComponentFixture<CustomDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCaseDirective, CustomDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirectiveComponent);

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    // all elements with an attached ChangeCaseDirective
    const des = fixture.debugElement.queryAll(By.directive(ChangeCaseDirective));
    des[0].nativeElement.value = 'Test';
    des[0].nativeElement.dispatchEvent(new Event('input'));
    des[0].nativeElement.dispatchEvent(new Event('blur'));
    des[1].nativeElement.value = 'Test';
    des[1].nativeElement.dispatchEvent(new Event('input'));
    des[1].nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(des[0].nativeElement.value).toBe('TEST');
    expect(des[1].nativeElement.value).toBe('test');
  });
});
