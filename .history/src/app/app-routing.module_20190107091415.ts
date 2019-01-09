import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ViewsComponent } from './views/views.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './views/error-pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'views', component: ViewsComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
