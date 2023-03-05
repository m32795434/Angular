import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  constructor(private uiService: UiService) { }
  @Input() text = '';
  @Input() color = '';
  // @Output() btnClick = new EventEmitter();
  // this.btnClick.emit(); --> DENTRO DE ONCLICK

  onClick() {
    this.uiService.toggleAddTask();
  }
}
