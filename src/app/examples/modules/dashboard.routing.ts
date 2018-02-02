import { Routes } from '@angular/router';


import { DashboardComponent } from './dashboard.component';
import { DatabindingComponent } from './databinding.component';
import { DirectiveComponent } from './directive.component';

export const DashboardRoutes: Routes = [
{
    path: '',
    component: DashboardComponent
},
{ path: 'databinding', component: DatabindingComponent},
{ path: 'directive', component: DirectiveComponent}

];
