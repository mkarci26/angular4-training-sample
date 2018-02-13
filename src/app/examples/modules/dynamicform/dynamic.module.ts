import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { DynamicRoutes } from './dynamic.routing';

import { CrudService } from './../shared/_services/crud.service';
import { SharedCustomModule } from './../shared/_directives/shared.custom.module';

import { FeedComponent } from './_comp/feed.component';
import { FeedEditComponent } from './_comp/edit.component';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule.forChild(DynamicRoutes),
        SharedCustomModule
    ],
    providers: [CrudService],
    declarations: [FeedComponent, FeedEditComponent]
})

export class DynamicModule { }
