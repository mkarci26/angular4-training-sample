import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { DatabindingComponent } from './databinding.component';
import { DirectiveComponent } from './directive.component';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule.forChild(DashboardRoutes),
    ],
    declarations: [DashboardComponent, DatabindingComponent, DirectiveComponent]
})

export class DashboardModule { }
