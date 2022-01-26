import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppwriteService } from 'src/app/appwrite.service';
import { matchValidator } from 'src/app/validators/match-password.validator';

@Component({
  selector: 'app-recover-confirmation',
  templateUrl: './recover-confirmation.component.html',
  styleUrls: ['./recover-confirmation.component.scss'],
})
export class RecoverConfirmationComponent implements OnInit {
  userId = '';
  secret = '';
  expire = '';

  error = '';

  confirmationForm = this.fb.group({
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        matchValidator('confirmPassword', true),
      ],
    ],
    passwordConfirmation: [
      '',
      [Validators.required, matchValidator('password')],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private appwriteService: AppwriteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['userId'];
      this.secret = params['secret'];
      this.expire = params['expire'];
    });
    this.appwriteService.errorSubject.subscribe((error) => {
      if (error.startsWith('Invalid recovery token')) {
        this.router.navigate(['/account/recover']);
      } else if (this.error === '' && this.appwriteService.recovered) {
        this.error = error;
        this.router.navigate(['/account']);
      } else {
        this.error = error;
      }
    });
  }

  onSubmit() {
    if (this.expire) {
      if (parseInt(this.expire) < Math.floor(+new Date() / 1000)) {
        this.error = 'O link de recuperação expirou';
        return;
      }
    }
    this.appwriteService.recoverConfirmation(
      this.userId,
      this.secret,
      this.confirmationForm.get('password')?.value,
      this.confirmationForm.get('passwordConfirmation')?.value
    );
  }
}
