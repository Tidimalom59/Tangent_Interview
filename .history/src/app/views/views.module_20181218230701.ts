import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO & inst 3rd packs: import { ngDropdownModule } from '@ng-bootstrap/ng-bootsrtap';

import { ViewsComponent } from './views.component';
import { HeaderComponent } from './navigationbar/header/header.component';
import { ViewsRoutingModule } from './views-routing.module';


@NgModule({
    imports: [
        CommonModule,
        // TODO: NgDropdownModule
        ViewsRoutingModule
    ],
    declarations: [ ViewsComponent, HeaderComponent ]
})
export class ViewModule {}
