import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    //StandAlone or not, you can instantiate various times this component, and pass them some values
    selector: 'ngbd-popover-autoclose',
    standalone: true,
    imports: [NgbPopoverModule],
    templateUrl: './popover-autoclose.html',
})
export class NgbdPopoverAutoclose { }