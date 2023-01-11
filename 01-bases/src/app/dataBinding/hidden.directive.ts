import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hidden]'
})
export class HiddenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}