import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  { path: '', component: ViewsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'employee', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
