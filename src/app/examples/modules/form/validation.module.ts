import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { LoginFormComponent } from './login-form.component';
import { ValidationRoutes } from './validation.routing';
import { EqualValidator } from './password.match.directive';

import { FormBuilderComponent } from './form.builder';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        RouterModule.forChild(ValidationRoutes),
    ],
    declarations: [LoginFormComponent, FormBuilderComponent],
})

export class ValidationModule { }
