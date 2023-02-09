import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text = '';
  @Input() color = '';
  @Output() btnOutput = new EventEmitter();

  onClick() {
    this.btnOutput.emit();
  }
}
