import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/appwrite.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent implements OnInit {
  recoverForm = this.fb.group({
    email: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private appwriteService: AppwriteService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.appwriteService.recover(this.recoverForm.get('email')?.value);
    this.router.navigate(['/account/sent']);
  }
}
