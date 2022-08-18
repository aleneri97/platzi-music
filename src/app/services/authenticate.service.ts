import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  logUser(credentials) {
    return new Promise((resolve, reject) => {
      if (credentials.email === 'test@test.com' && credentials.password === '12345') {
        return resolve('Login Correcto');
      } else {
        return reject('Login Incorrecto');
      }
    });
  }
}
