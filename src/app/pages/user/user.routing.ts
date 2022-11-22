import { Routes } from '@angular/router';
import { NewUserComponent } from './new-user.component';

import { UserComponent } from './user.component';

export const UserRoutes: Routes = [
    { path: '',          component: UserComponent},
    { path: 'adicionar',      component: NewUserComponent}
];
