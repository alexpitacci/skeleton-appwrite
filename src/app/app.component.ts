import { Component } from '@angular/core';
import { AppwriteService } from './appwrite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  session = this.appwriteService.session;
  constructor(private appwriteService: AppwriteService) {}
}
