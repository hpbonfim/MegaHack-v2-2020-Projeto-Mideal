import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserMenuComponent } from './user-menu.component';

const routes: Routes = [{ path: '', component: UserMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMenuRoutingModule { }
