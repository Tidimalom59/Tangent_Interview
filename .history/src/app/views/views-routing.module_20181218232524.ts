import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { HeaderComponent } from './navigationbar/header/header.component';

const routes: Routes = [
    { children: [
        { path: '',
        component: ViewsComponent},
        { path: 'head', component: HeaderComponent}
    ] }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ViewsRoutingModule {
}
