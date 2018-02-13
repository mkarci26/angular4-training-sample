import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { dynamicFormComponent } from './dynamic.foms.component';

@NgModule({
    declarations: [
        dynamicFormComponent,
    ],
    exports: [
        dynamicFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: []
})
export class SharedCustomModule { }
