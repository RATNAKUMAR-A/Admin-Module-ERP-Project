import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuardGuard } from './cores/auth-guard.guard';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path:'employees',component: EmployeeListComponent,canActivate: [AuthGuardGuard]},
  {path:'create-employee',component: CreateEmployeeComponent,canActivate: [AuthGuardGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'update-employee/:id',component: UpdateEmployeeComponent,canActivate: [AuthGuardGuard]},
  {path:'employee-details/:id',component: EmployeeDetailsComponent,canActivate: [AuthGuardGuard]},
  {path:'home',component: HomeComponent,canActivate: [AuthGuardGuard]},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'admin-details',component: AdminDetailsComponent,canActivate: [AuthGuardGuard]},
  {path:'forgotpassword',component: ForgotpasswordComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
