import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountToolbarComponent } from './account-toolbar/account-toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecoverComponent } from './recover/recover.component';
import { RecoverConfirmationComponent } from './recover-confirmation/recover-confirmation.component';
import { RecoverSentComponent } from './recover-sent/recover-sent.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, AccountToolbarComponent, RecoverComponent, RecoverConfirmationComponent, RecoverSentComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountModule {}
