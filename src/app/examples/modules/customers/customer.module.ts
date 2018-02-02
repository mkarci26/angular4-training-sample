import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerComponent } from './customer.component';
import { CustomerRoutes } from './customer.routing';
import { CustomerService } from './customer.service';


@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule.forChild(CustomerRoutes),
    ],
    declarations: [CustomerComponent],
    providers: [CustomerService]
})

export class CustomerModule { }
