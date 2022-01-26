import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/appwrite.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  error = '';
  constructor(
    private fb: FormBuilder,
    private appwriteService: AppwriteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.appwriteService.errorSubject.subscribe((error) => {
      if (error.startsWith('Invalid email')) {
        this.error = 'E-mail inválido';
      } else if (this.error === '' && this.appwriteService.account.$id) {
        this.error = error;
        this.router.navigate(['/courses']);
      } else {
        this.error = error;
      }
    });
  }

  onSubmit() {
    this.appwriteService.signup(
      this.signupForm.get('email')?.value,
      this.signupForm.get('password')?.value,
      this.signupForm.get('name')?.value
    );
  }
}
