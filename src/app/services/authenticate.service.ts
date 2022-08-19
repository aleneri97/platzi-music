import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  userData;

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async logUser(credentials: { email: string; password: string }) {
    this.userData = await this.storage.get('user');
    return new Promise((resolve, reject) => {
      credentials.password = btoa(credentials.password);
      if (credentials.email === 'test@test.com' && credentials.password === btoa('12345')) {
        this.storage.set('isLogged', true);
        resolve('Login correcto');
      } else {
        reject('Login incorrecto');
      }
    });
  }

  registerUser(userData) {
    userData.password = btoa(userData.password);
    return this.storage.set('user', userData);
  }

}
