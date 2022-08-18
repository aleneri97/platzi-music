import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLogged = await this.storage.get('isLogged');
    if (isLogged) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
