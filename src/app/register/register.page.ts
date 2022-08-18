import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  errorMessage = '';
  registerForm: FormGroup;
  validationMessages = {
    name: [
      { type: 'required', message: 'El nombre es requerido' },
    ],
    lastname: [
      { type: 'required', message: 'El apellido es requerido' },
    ],
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'email', message: 'El email no es válido' },
    ],
    password: [
      { type: 'required', message: 'La contraseña es requerida' },
      { type: 'minlength', message: 'La contraseña debe de contener al menos 5 caracteres' },
    ],
  };

  constructor(private fb: FormBuilder, private authService: AuthenticateService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {
  }

  registerUser(credentials: { name: string; lastname: string; email: string; password: string }) {
    // this.authService.logUser(credentials)
    //   .then(res => {
    //     this.errorMessage = '';
    //     this.router.navigateByUrl('/home');
    //   })
    //   .catch(err => {
    //     this.errorMessage = err;
    //   });
  }

}
