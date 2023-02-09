import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text = '';
  @Input() color = '';

  onClick() {
    console.log('clicked!')
  }
}
