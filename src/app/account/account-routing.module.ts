import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverConfirmationComponent } from './recover-confirmation/recover-confirmation.component';
import { RecoverSentComponent } from './recover-sent/recover-sent.component';
import { RecoverComponent } from './recover/recover.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'sent', component: RecoverSentComponent },
  { path: 'confirmation', component: RecoverConfirmationComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
