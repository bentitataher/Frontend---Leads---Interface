import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// Import components
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';

// Authentication
import { LoginComponent } from './views/leads/authentication/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { RegistrationComponent } from './views/leads/authentication/registration/registration.component';
import { PasswordForgetComponent } from './views/leads/authentication/password-forget/password-forget.component';
import { PasswordResetComponent } from './views/leads/authentication/password-reset/password-reset.component';

// My importations
import { ReactiveFormsModule } from '@angular/forms'
import { AuthenticationService } from './authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

// Enregistrement
import { AjoutComponent } from './views/leads/enregistrement/ajout/ajout.component';
import { GestionComponent } from './views/leads/enregistrement/gestion/gestion.component';
import { ModificationComponent } from './views/leads/enregistrement/modification/modification.component'
import { EnregistrementService } from './enregistrement.service';

// Secteur
import { AjoutSecteurComponent } from './views/leads/secteur/ajout-secteur/ajout-secteur.component';
import { GestionSecteurComponent } from './views/leads/secteur/gestion-secteur/gestion-secteur.component';
import { ModificationSecteurComponent } from './views/leads/secteur/modification-secteur/modification-secteur.component';
import { SecteurService } from './secteur.service';
import { GestionUserComponent } from './views/leads/gestion-users/gestion-user/gestion-user.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ToasterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    RegistrationComponent,
    PasswordForgetComponent,
    PasswordResetComponent,
    AjoutComponent,
    GestionComponent,
    ModificationComponent,
    AjoutSecteurComponent,
    GestionSecteurComponent,
    ModificationSecteurComponent,
    GestionUserComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  ToasterService,
  AuthenticationService,
  EnregistrementService,
  SecteurService,
  AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
