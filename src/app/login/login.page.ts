import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessage = '';
  loginForm: FormGroup;
  validationMessages = {
    email: [
      { type: 'required', message:  'El email es requerido' },
      { type: 'email', message:  'El email no es válido' },
    ],
    password: [
      { type: 'required', message:  'La contraseña es requerida' },
      { type: 'minlength', message:  'La contraseña debe de contener al menos 5 caracteres' },
    ],
  };

  constructor(private fb: FormBuilder, private authService: AuthenticateService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {
  }

  logUser(credentials: Event) {
    this.authService.logUser(credentials).then(res => {
      this.errorMessage = '';
      this.router.navigateByUrl('/home');
    });
    console.log(credentials);
  }

}
