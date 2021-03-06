import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { UserShellRoutingModule } from './user-shell-routing.module';
import { UserShellComponent } from './user-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageMenuComponent } from '../page-menu/page-menu.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { AuthGuardService } from 'src/app/shared/auth/auth.guard.service';
import { PageModelsComponent } from '../page-models/page-models.component';
import { PageMyContractsComponent } from '../page-my-contracts/page-my-contracts.component';
import { PageConfirmContractPreviewComponent } from '../page-confirm-contract-preview/page-confirm-contract-preview.component';
import { UserConfirmationSmsService } from 'src/app/public/user-confirmation/user-confirmation-sms.service';

@NgModule({
  declarations: [
    UserShellComponent,
    PageMenuComponent,
    BottomMenuComponent,
    PageModelsComponent,
    PageConfirmContractPreviewComponent,
    PageMyContractsComponent,
  ],
  imports: [
    UserShellRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
  ],
  providers: [AuthGuardService, UserConfirmationSmsService],
})
export class UserShellModule {}
