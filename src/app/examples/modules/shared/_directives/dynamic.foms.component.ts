import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'dynamic-forms',
    templateUrl: './dynamic.foms.component.html'
})
export class dynamicFormComponent {
    @Input() formModel: any;
    @Input() field: any;
}