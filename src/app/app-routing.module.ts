import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Mes importations
import { AuthGuard } from './auth.guard';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/leads/authentication/login/login.component';
import { PasswordForgetComponent } from './views/leads/authentication/password-forget/password-forget.component';
import { PasswordResetComponent } from './views/leads/authentication/password-reset/password-reset.component';
import { RegistrationComponent } from './views/leads/authentication/registration/registration.component';
import { AjoutComponent } from './views/leads/enregistrement/ajout/ajout.component';
import { GestionComponent } from './views/leads/enregistrement/gestion/gestion.component';
import { ModificationComponent } from './views/leads/enregistrement/modification/modification.component';
import { AjoutUserComponent } from './views/leads/gestion-users/ajout-user/ajout-user.component';
import { GestionUserComponent } from './views/leads/gestion-users/gestion-user/gestion-user.component';
import { ModificationUserComponent } from './views/leads/gestion-users/modification-user/modification-user.component';
import { AjoutSecteurComponent } from './views/leads/secteur/ajout-secteur/ajout-secteur.component';
import { GestionSecteurComponent } from './views/leads/secteur/gestion-secteur/gestion-secteur.component';
import { ModificationSecteurComponent } from './views/leads/secteur/modification-secteur/modification-secteur.component';
import { RegisterComponent } from './views/register/register.component';

// Projet leads connect

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },

  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'forget-password',
    component: PasswordForgetComponent
  },
  {
    path: 'reset-password/:token',
    component: PasswordResetComponent,
    data: {
      title: 'Register Page'
    }
  },
  // Enregistrement routing
  {
    path: 'enregistrement-gestion',
    component: GestionComponent,
    data: {
      title: 'Gestion enregistrement'
    }
  },
  {
    path: 'enregistrement-ajout',
    component: AjoutComponent,
    data: {
      title: 'Ajout enregistrement'
    }
  },
  {
    path: 'enregistrement-modification/:id',
    component: ModificationComponent,
    data: {
      title: 'Modification enregistrement'
    }
  },
  // Secteur routing
  {
    path: 'secteur-ajout',
    component: AjoutSecteurComponent,
    data: {
      title: 'Ajout secteur'
    }
  },
  {
    path: 'secteur-gestion',
    component: GestionSecteurComponent,
    data: {
      title: 'Gestion secteur'
    }
  },
  {
    path: 'secteur-modification/:id',
    component: ModificationSecteurComponent,
    data: {
      title: 'Modification secteur'
    }
  },
  // Gestion users routing
  {
    path: 'gestion-users',
    component: GestionUserComponent,
    data: {
      title: 'G??rer les utilisateurs'
    }
  },
  {
    path: 'ajout-user',
    component: AjoutUserComponent,
    data: {
      title: 'Ajouter utilisateur'
    }
  },
  {
    path: 'modification-user/:id',
    component: ModificationUserComponent,
    data: {
      title: 'Ajouter utilisateur'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'editors',
        loadChildren: () => import('./views/editors/editors.module').then(m => m.EditorsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/forms.module').then(m => m.FormsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'google-maps',
        loadChildren: () => import('./views/google-maps/google-maps.module').then(m => m.GoogleMapsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'plugins',
        loadChildren: () => import('./views/plugins/plugins.module').then(m => m.PluginsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/tables/tables.module').then(m => m.TablesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/apps/apps.module').then(m => m.AppsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
