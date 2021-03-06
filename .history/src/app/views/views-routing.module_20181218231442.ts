import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
    { children: [
        { path: '',
        component: ViewsComponent}
    ] }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ViewsRoutingModule {
}
