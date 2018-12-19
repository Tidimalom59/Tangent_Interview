import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO & inst 3rd packs: import { ngDropdownModule } from '@ng-bootstrap/ng-bootsrtap';

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
        HttpClientModule
    ],
    declarations: [ ViewsComponent, HeaderComponent, SidebarComponent ]
})
export class ViewModule {}
