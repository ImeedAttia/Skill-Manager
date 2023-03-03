import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { DataService } from './Services/data.service';
import { UserService } from './Services/user.service';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { HomeComponent } from './Components/dashboard/home/home.component';
import { ProfileComponent } from './Components/dashboard/profile/profile.component';
import { TeamsComponent } from './Components/dashboard/teams/teams.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    NavBarComponent,
    SpinnerComponent,
    HomeComponent,
    ProfileComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    authInterceptorProviders,
    DataService,
    UserService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3500}},
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
    ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
