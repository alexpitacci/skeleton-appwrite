import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/appwrite.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  error = '';

  constructor(
    private fb: FormBuilder,
    private appwriteService: AppwriteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.appwriteService.sessionSubject.subscribe((session) => {
      if (session.current) {
        this.router.navigate(['/courses']);
      }
    });
    this.appwriteService.errorSubject.subscribe((error) => {
      if (error === 'Invalid credentials') {
        this.error = 'Usuário ou senha inválidos';
      } else if (error !== '') {
        this.error = 'Erro ao tentar acessar o sistema';
      } else {
        this.error = error;
      }
    });
  }

  async onSubmit() {
    await this.appwriteService.createSession(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    );
    this.router.navigate([this.appwriteService.redirectUrl]);
  }
}
