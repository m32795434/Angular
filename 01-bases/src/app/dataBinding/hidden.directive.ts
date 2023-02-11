import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hidden]',//css selector
})
export class HiddenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}