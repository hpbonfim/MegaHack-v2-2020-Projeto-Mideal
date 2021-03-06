import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { NgxMaskModule } from 'ngx-mask';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { UserRegistersService } from './user-registers.service';
import { UserConfirmationSmsService } from '../user-confirmation/user-confirmation-sms.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    SignupRoutingModule,
    SharedModule,
    NgxMaskModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    UserRegistersService,
    UserDataService,
    UserConfirmationSmsService,
  ],
})
export class SignupModule {}
