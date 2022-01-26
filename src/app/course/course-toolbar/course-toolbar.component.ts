import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/appwrite.service';

@Component({
  selector: 'app-course-toolbar',
  templateUrl: './course-toolbar.component.html',
  styleUrls: ['./course-toolbar.component.scss'],
})
export class CourseToolbarComponent implements OnInit {
  username = this.appwriteService.account.name;
  userImage = this.appwriteService.avatars.getInitials(this.username, 48, 48);
  constructor(
    private appwriteService: AppwriteService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.appwriteService.logout();
    this.router.navigate(['/']);
  }
}
