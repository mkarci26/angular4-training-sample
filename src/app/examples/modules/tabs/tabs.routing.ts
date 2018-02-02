import { Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TabsComponent } from './tabs.component';
import { ChildComponent } from './child.component';

export const TabsRoutes: Routes = [
{
    path: '',
    component: TabsComponent
},
{
    path: ':type',
    component: ChildComponent
},

];
