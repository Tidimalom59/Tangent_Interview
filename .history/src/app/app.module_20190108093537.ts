import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { EmployeeComponent } from './employee/employee.component';
import { HttpService } from './_services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './views/navigationbar/header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './_services/user.service';
import { NotFoundComponent } from './views/error-pages/not-found/not-found.component';
import { GrdFilterPipe } from './grd-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    LoginComponent,
    HeaderComponent,
    UserProfileComponent,
    NotFoundComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
