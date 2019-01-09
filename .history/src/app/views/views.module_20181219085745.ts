import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDropdownModule } from 'angular-dropdown';

import { ViewsComponent } from './views.component';
import { HeaderComponent } from './navigationbar/header/header.component';
import { ViewsRoutingModule } from './views-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './navigationbar/sidebar/sidebar.component';


@NgModule({
    imports: [
        CommonModule,
        // TODO: NgDropdownModule
        ViewsRoutingModule,
        HttpClientModule,
        AngularDropdownModule
    ],
    declarations: [ ViewsComponent, HeaderComponent, SidebarComponent ]
})
export class ViewModule {}
