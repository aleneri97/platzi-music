import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  logUser(credentials: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      if (credentials.email === 'test@test.com' && credentials.password === '12345') {
        this.storage.set('isLogged', true);
        return resolve('Login Correcto');
      } else {
        return reject('Login Incorrecto');
      }
    });
  }
}
