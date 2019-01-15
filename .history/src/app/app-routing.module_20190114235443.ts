import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './views/error-pages/not-found/not-found.component';
import { LeaveComponent } from './leave/leave.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'leave', component: LeaveComponent, canActivate: [AuthGuard]},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
