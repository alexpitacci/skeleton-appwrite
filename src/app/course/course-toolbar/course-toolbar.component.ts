import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/appwrite.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-course-toolbar',
  templateUrl: './course-toolbar.component.html',
  styleUrls: ['./course-toolbar.component.scss'],
})
export class CourseToolbarComponent implements AfterViewInit {
  username = this.appwriteService.account.name;
  userImage = this.appwriteService.avatars.getInitials(this.username, 48, 48);

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(
    private appwriteService: AppwriteService,
    private router: Router,
    private observer: BreakpointObserver
  ) {}

  ngAfterViewInit(): void {
    this.observer.observe([Breakpoints.Tablet]).subscribe((result) => {
      if (result.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  logout() {
    this.appwriteService.logout();
    this.router.navigate(['/']);
  }
}
