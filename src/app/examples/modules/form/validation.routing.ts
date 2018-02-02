import { Routes } from '@angular/router';

import { LoginFormComponent } from './login-form.component';
import { FormBuilderComponent } from './form.builder';

export const ValidationRoutes: Routes = [
{
    path: '',
    component: LoginFormComponent
},
{
    path: 'form-builder',
    component: FormBuilderComponent
},

];
