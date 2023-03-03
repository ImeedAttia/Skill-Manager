import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SecureInnerPagesGuard } from './GUARDS/secure-innerpages.guard';
import { AuthGuardGuard } from './GUARDS/auth-guard.guard';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path : "SignIn" , component : SignInComponent, canActivate: [SecureInnerPagesGuard]},
  {path : "Dashboard" , component : DashboardComponent, canActivate: [AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// https://vsavkin.tumblr.com/post/146722301646/angular-router-empty-paths-componentless-routes