import { Routes } from '@angular/router';

import { FeedComponent } from './_comp/feed.component';
import { FeedEditComponent } from './_comp/edit.component';

export const DynamicRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: FeedComponent, pathMatch: 'full' },
            { path: ':type', component: FeedComponent, pathMatch: 'full' },
            { path: ':type/edit', component: FeedEditComponent, pathMatch: 'full' },
            { path: ':type/edit/new', component: FeedEditComponent, pathMatch: 'full' },
            { path: ':type/edit/:id', component: FeedEditComponent, pathMatch: 'full' },
            { path: '**', redirectTo: 'site' }
        ]
    }
];
