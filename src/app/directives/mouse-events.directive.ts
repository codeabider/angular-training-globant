import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseEvents]'
})
export class MouseEventsDirective {
  element: any;

  @Input() defaultColor: string;

  constructor(elementRef: ElementRef) {
    // console.log(elementRef.nativeElement);
    this.element = elementRef.nativeElement;
  }

  @HostListener('mouseover') onMouseOver() {
    this.element.style.backgroundColor = '#a93371';
  }

  @HostListener('mouseout') onMouseOut() {
    this.element.style.backgroundColor = this.defaultColor;
  }

}
