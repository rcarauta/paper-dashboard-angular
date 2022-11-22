import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'dashboard',
    loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }, 
  {
    path: 'table',
    loadChildren: () => import('./pages/table/table.module').then(x => x.TableModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(x => x.UserModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]
