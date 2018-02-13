import { Routes } from '@angular/router';
import { exComponent } from "./examples/example.component";
import { errorComponent } from "./examples/error.component";

export const AppRoutes: Routes = [
    { path: 'dashboard', loadChildren: './examples/modules/dashboard.module#DashboardModule' },
    { path: 'customer', loadChildren: './examples/modules/customers/customer.module#CustomerModule' },
    { path: 'tabs', loadChildren: './examples/modules/tabs/tabs.module#TabsModule' },
    { path: 'custom', loadChildren: './examples/modules/custom/custom.module#CustomModule' },
    { path: 'validation', loadChildren: './examples/modules/form/validation.module#ValidationModule' },
    { path: 'animation', loadChildren: './examples/modules/animation/animation.module#AnimationModule' },
    { path: 'dynamicform', loadChildren: './examples/modules/dynamicform/dynamic.module#DynamicModule' },
    { path: 'comp', component: exComponent },
    { path: '404', component: errorComponent },
    { path: '', component: exComponent },
    {path: '**', redirectTo: '404', pathMatch: 'full'},
];
