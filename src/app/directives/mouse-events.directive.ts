import { Directive, ElementRef, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appMouseEvents]'
})
export class MouseEventsDirective {
  element: any;

  @Input() defaultColor: string;
  @Input() appMouseEvents: boolean;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  @HostListener('mouseover') onMouseOver() {
    this.changeBackground('#a93371');
  }

  @HostListener('mouseout') onMouseOut() {
    this.changeBackground(this.defaultColor);
  }

  changeBackground = (color: string, force?: boolean): void => {
    if (this.appMouseEvents || force) {
      this.element.style.backgroundColor = color;
    } else {
      this.element.style.backgroundColor = 'rgba(0, 0 ,0 , .12)';
    }
  }
}
