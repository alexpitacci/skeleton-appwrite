import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppwriteService } from '../appwrite.service';

@Injectable({
  providedIn: 'root',
})
export class CourseAuthGuard implements CanActivate {
  constructor(
    private appwriteService: AppwriteService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.appwriteService.session.current) {
      return true;
    }
    this.appwriteService.redirectUrl = state.url;
    return this.router.parseUrl('/account');
  }
}
