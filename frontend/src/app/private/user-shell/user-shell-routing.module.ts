import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserShellComponent } from './user-shell.component';

const routes: Routes = [{ path: '', component: UserShellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserShellRoutingModule {}
