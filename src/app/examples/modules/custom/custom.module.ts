import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomComponent } from './custom.component';
import { CustomRoutes } from './custom.routing';
import { IfDirective, ReverseStr } from './custom.elements';


@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule.forChild(CustomRoutes),
    ],
    declarations: [CustomComponent, IfDirective, ReverseStr],
})

export class CustomModule { }
