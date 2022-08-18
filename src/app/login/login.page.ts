import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {
  }

}
