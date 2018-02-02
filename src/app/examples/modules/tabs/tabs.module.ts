import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChildComponent } from './child.component';
import { TabsComponent } from './tabs.component';
import { AComponent } from './a.component';
import { TabsRoutes } from './tabs.routing';


@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule.forChild(TabsRoutes),
    ],
    declarations: [TabsComponent, ChildComponent, AComponent]
})

export class TabsModule { }
