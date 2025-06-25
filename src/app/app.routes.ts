import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "docs", component: DocsComponent},
    {path: "**", component: ErrorComponent}
];
